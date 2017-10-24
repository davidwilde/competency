import React from "react";
import { shallow } from "enzyme";
import Accordian from ".";

it("renders", () => {
  shallow(
    <Accordian
      items={[
        {
          name: "Buzz",
          description:
            "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
        }
      ]}
    />
  );
});
