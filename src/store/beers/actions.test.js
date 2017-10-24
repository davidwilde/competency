import { getBeersPending, getBeersFulfilled } from "./actions";
import { GET_BEERS_PENDING, GET_BEERS_FULFILLED } from "./types";

describe(" actions", () => {
  describe("getBeersFulfilled", () => {
    it("should return the correct type and handler", () => {
      const handlerFixture = jest.fn();
      const expected = {
        type: GET_BEERS_FULFILLED,
        beers: handlerFixture
      };
      expect(getBeersFulfilled(handlerFixture)).toEqual(expected);
    });
  });

  describe("getBeersPending", () => {
    it("should return the correct type", () => {
      const expected = {
        type: GET_BEERS_PENDING
      };
      expect(getBeersPending()).toEqual(expected);
    });
  });
});
