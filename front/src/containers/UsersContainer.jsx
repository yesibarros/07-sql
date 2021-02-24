import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Users from "../components/Users";
import NewUser from "../components/NewUser";

export default class UsersContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      newUser: {
        name: "",
        lastname: "",
        dni: null,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((serverUsers) => {
        this.setState({ users: serverUsers });
      });
  }

  handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      newUser: {
        ...this.state.newUser,
        [key]: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, lastname, dni } = this.state.newUser;
    axios
      .post("/api/users", { name, lastname, dni })
      .then((res) => res.data)
      .then((user) => this.setState({ users: [...this.state.users, user] }));
  }

  render() {
    return (
      <div>
        <Link to="/cars">
          <h2>CARS</h2>
        </Link>
        <NewUser
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Users users={this.state.users} />
      </div>
    );
  }
}
