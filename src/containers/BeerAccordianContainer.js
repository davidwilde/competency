import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Accordian from "../components/Accordian";
import * as actions from "../store/beers/actions";

class BeerAccordianContainer extends Component {
  static propTypes = {
    onLoad: PropTypes.func
  };

  componentDidMount() {
    this.props.onLoad(this.props.dispatch);
  }

  render() {
    return <Accordian {...this.props} />;
  }
}

const mapStateToProps = state => ({
  loading: state.beers.get("loading"),
  error: state.beers.get("error"),
  items: state.beers.get("beers")
});

const mapDispatchToProps = dispatch => ({
  onLoad: dispatch => dispatch(actions.getBeersPending()),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(
  BeerAccordianContainer
);
