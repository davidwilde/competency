import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { isDev, isBrowser } from "config";
import reducer from "./reducer";
import { rootEpic } from "./epics";

const epicMiddleware = createEpicMiddleware(rootEpic);

const devtools =
  isDev && isBrowser && window.devToolsExtension
    ? window.devToolsExtension
    : () => fn => fn;

const configureStore = (initialState, services = {}) => {
  const enhancers = [applyMiddleware(epicMiddleware), devtools()];

  const store = createStore(reducer, initialState, compose(...enhancers));

  if (module.hot) {
    module.hot.accept("./reducer", () => {
      const nextReducer = require("./reducer").default;
      store.replaceReducer(nextReducer);
    });
    module.hot.accept("./epics", () => {
      const nextEpics = require("./epics").default;
      epicTask.cancel();
      epicTask.done.then(() => {
        epicTask = epicMiddleware.run(nextEpics, services);
      });
    });
  }

  return store;
};

export default configureStore;
