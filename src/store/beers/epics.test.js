import "rxjs/add/observable/throw";
import "rxjs/add/observable/of";
import "rxjs/add/operator/toArray";

import { Observable } from "rxjs/Observable";
import { ActionsObservable } from "redux-observable";
import * as types from "./types";
import * as epics from "./epics";

describe("fetchBeers Epic", () => {
  it("should dispatch an getBeersFulfilled action if successful", () => {
    const action$ = ActionsObservable.of({
      type: types.GET_BEERS_PENDING
    });
    const call = () => Observable.of({});

    const expectedActions = [
      {
        type: types.GET_BEERS_FULFILLED,
        shift: {}
      }
    ];

    epics
      .fetchBeersEpic(action$, null, call)
      .toArray()
      .subscribe(actualActions => {
        expect(actualActions).toEqual(expectedActions);
      });
  });

  it("should dispatch a getBeersRejected action if unsuccessful", () => {
    const action$ = ActionsObservable.of({
      type: types.GET_BEERS_PENDING
    });
    const call = () => Observable.throw("save failed");

    const expectedActions = [
      {
        type: types.GET_BEERS_REJECTED,
        error: "save failed"
      }
    ];

    epics
      .fetchBeersEpic(action$, null, call)
      .toArray()
      .subscribe(actualActions =>
        expect(actualActions).toEqual(expectedActions)
      );
  });
});
