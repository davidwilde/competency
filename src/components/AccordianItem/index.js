import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class AccordianItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false
    };
  }
  render() {
    const Article = styled("article")`
      margin-left: 10em;
      margin-right: 10em;
      padding: 3em;
      background-color: lightgrey;
      border-top: 1px grey solid;
    `;

    const H2 = styled("h2")`float: left;`;

    const Header = styled("header")`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

    const Toggler = styled("a")`cursor: pointer;`;

    const Content = styled("div")`
      display: ${props => (props.revealed ? "block" : "none")};
    `;

    return (
      <Article>
        <Header>
          <H2>{this.props.title}</H2>
          <Toggler onClick={this.toggle.bind(this)}>
            {this.state.revealed ? "-" : "+"}
          </Toggler>
        </Header>
        <Content revealed={this.state.revealed}>
          {this.props.description}
        </Content>
      </Article>
    );
  }
  toggle() {
    return this.setState({ revealed: !this.state.revealed });
  }
}

AccordianItem.propTypes = {
  revealed: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string
};

export default AccordianItem;
