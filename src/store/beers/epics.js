import { Observable } from "rxjs/Observable";
import "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/observable/dom/ajax";
import { ajax } from "rxjs/observable/dom/ajax";

import * as types from "./types";
import * as actions from "./actions";

export const api = {
  getBeers: payload => ({})
};

export const fetchBeersEpic = (action$, store, call) =>
  action$
    .ofType(types.GET_BEERS_PENDING)
    .mergeMap(action =>
      ajax
        .getJSON(`https://api.punkapi.com/v2/beers`)
        .map(payload => actions.getBeersFulfilled(payload))
    )
    .catch(err => Observable.of(actions.getBeersRejected(err)));
