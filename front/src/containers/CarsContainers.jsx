import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cars from "../components/Cars";
import NewCar from "../components/NewCar";

export default class CarsContainers extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      users: [],
      marca: "",
      modelo: "",
      year: "",
      precio: "",
      userId: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/cars")
      .then((cars) => cars.data)
      .then((data) =>
        this.setState({
          cars: data,
        })
      );

    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((serverUsers) => {
        this.setState({ users: serverUsers });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let { marca, modelo, year, precio, userId } = this.state;
    axios
      .post("/api/cars", { marca, modelo, year, precio, userId })
      .then((res) => res.data)
      .then((car) => this.setState({ cars: [...this.state.cars, car] }));
  }
  render() {
    return (
      <div>
        <Link to="/users">
          <h2>USERS</h2>
        </Link>
        <NewCar
          users={this.state.users}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Cars cars={this.state.cars} />
      </div>
    );
  }
}
