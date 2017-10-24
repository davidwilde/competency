import { combineEpics } from "redux-observable";
import * as beersEpics from "store/beers/epics";

export const rootEpic = combineEpics(beersEpics.fetchBeersEpic);
