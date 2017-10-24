import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Article = styled("article")`
  @media (min-width: 600px) {
    width: 33%;
  }
  @media (min-width: 1000px) {
    width: 25%;
  }
  width: 100%;
  padding: 2em;
  float: left;
  box-sizing: border-box;
`;

const Img = styled("img")`
  height: 20em;
  width: auto;
`;

const GridItem = ({ title, image, description }) => (
  <Article>
    <Img src={image} alt={title} />
    <h3>{title}</h3>
    <div>{description}</div>
  </Article>
);

GridItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

export default GridItem;
