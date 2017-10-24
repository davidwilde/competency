/*
 *
 * Beer actions
 * 
 */

import * as types from "./types";

export const getBeersPending = () => ({
  type: types.GET_BEERS_PENDING
});

export const getBeersFulfilled = beers => ({
  type: types.GET_BEERS_FULFILLED,
  beers
});

export const getBeersRejected = error => ({
  type: types.GET_BEERS_REJECTED,
  error
});

export const changeFilter = payload => ({
  type: types.CHANGE_FILTER,
  payload
});
