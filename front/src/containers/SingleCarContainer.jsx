import React, { Component } from "react";
import axios from "axios";
import SingleCar from "../components/SingleCar";

export default class SingleCarContainer extends Component {
  constructor() {
    super();
    this.state = {
      car: {},
    };
  }

  componentDidMount() {
    axios
      .get(`/api/cars/${this.props.cardId}`)
      .then((res) => res.data)
      .then((car) => this.setState({ car }));
  }

  render() {
    return <SingleCar car={this.state.car} />;
  }
}
