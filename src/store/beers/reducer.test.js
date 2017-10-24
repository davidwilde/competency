import beersReducer, { initialState } from "./reducer";
import * as actions from "./actions";

describe("beers reducer", () => {
  it("returns the initial initialState", () => {
    expect(beersReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle getBeersPending correctly", () => {
    const expected = initialState
      .set("loading", true)
      .set("error", false)
      .set("beers", undefined);

    expect(beersReducer(initialState, actions.getBeersPending())).toEqual(
      expected
    );
  });

  it("should handle getBeersFulfilled correctly", () => {
    const fixture = [
      {
        title: "Buzz",
        description:
          "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
      }
    ];

    const expected = initialState
      .set("loading", false)
      .set("error", false)
      .set("beers", fixture);

    expect(
      beersReducer(initialState, actions.getBeersFulfilled(fixture))
    ).toEqual(expected);
  });

  it("should handle getBeersRejected correctly", () => {
    const fixture = {
      message: "Overlaps with an existing shift"
    };

    const expected = initialState.set("loading", false).set("error", fixture);

    expect(
      beersReducer(initialState, actions.getBeersRejected(fixture))
    ).toEqual(expected);
  });
});
