import React from "react";
import PropTypes from "prop-types";

import AccordianItem from "../AccordianItem";

const Accordian = ({ loading, items, title, error }) => {
  return (
    <div>
      <h1>{title}</h1>
      {loading && <div>loading...</div>}
      {error && <div>error</div>}
      {!loading && (
        <div>
          {items &&
            items.map(item => (
              <AccordianItem title={item.name} description={item.description} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Accordian;
