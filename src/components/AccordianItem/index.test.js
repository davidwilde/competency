import React from "react";
import { shallow } from "enzyme";
import AccordianItem from ".";

it("renders", () => {
  shallow(<AccordianItem title="Foo" description="Bar" />);
});
