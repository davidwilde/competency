import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GridItem from "../GridItem";

const Div = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

const Grid = ({ loading, items, error, changeFilter, filter }) => {
  return (
    <div>
      {!loading && (
        <div>
          <div>
            Filter beer by ABV: <input type="text" onChange={changeFilter} />
          </div>
          <Div>
            {items &&
              items
                .filter(item => item.abv > filter)
                .map(item => (
                  <GridItem
                    image={item.image_url}
                    title={item.name}
                    description={item.description}
                  />
                ))}
          </Div>
        </div>
      )}
    </div>
  );
};

export default Grid;
