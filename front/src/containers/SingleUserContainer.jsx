import React, { Component } from "react";
import axios from "axios";
import SingleUser from "../components/SingleUser";

export default class SingleUserContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    axios
      .get(`/api/users/${this.props.userId}`)
      .then((res) => res.data)
      .then((user) => this.setState({ user }));
  }

  render() {
    return <SingleUser user={this.state.user} />;
  }
}
