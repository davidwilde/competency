/*
 *
 * Beers reducer
 * 
 */

import { fromJS } from "immutable";

import * as types from "./types";

export const initialState = fromJS({
  loading: false,
  error: false,
  beers: undefined
});

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BEERS_PENDING:
      return state
        .set("loading", true)
        .set("error", false)
        .set("beers", undefined);

    case types.GET_BEERS_FULFILLED:
      return state
        .set("loading", false)
        .set("error", false)
        .set("beers", action.beers);

    case types.GET_BEERS_REJECTED:
      return state
        .set("loading", false)
        .set("error", action.error)
        .set("beers", undefined);

    default:
      return state;
  }
};

export default beerReducer;
