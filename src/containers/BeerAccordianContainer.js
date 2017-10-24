import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Accordian from "../components/Accordian";
import Grid from "../components/Grid";
import * as actions from "../store/beers/actions";

class BeerAccordianContainer extends Component {
  static propTypes = {
    onLoad: PropTypes.func
  };

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <Accordian {...this.props} />
        <Grid {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.beers.get("loading"),
  error: state.beers.get("error"),
  items: state.beers.get("beers"),
  filter: state.beers.get("filter")
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.getBeersPending()),
  changeFilter: event => {
    !isNaN(parseInt(event.target.value, 10)) &&
      dispatch(actions.changeFilter(event.target.value));
  },
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(
  BeerAccordianContainer
);
