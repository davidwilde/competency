import React from "react";
import { injectGlobal } from "styled-components";

import { Provider } from "react-redux";

import AccordianItem from "./AccordianItem";
import BeerAccordianContainer from "../containers/BeerAccordianContainer";

injectGlobal`
  body {
    margin: 0;
  }
`;

const App = () => {
  return (
    <div>
      <BeerAccordianContainer title="Brewdog beers" />
    </div>
  );
};

export default App;
