import React from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import UsersContainer from "../containers/UsersContainer";
import SingleUserContainer from "../containers/SingleUserContainer";
import CarsContainers from "../containers/CarsContainers";
import SingleCarContainer from "../containers/SingleCarContainer";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/users" component={UsersContainer} />
      <Route
        path="/users/:id"
        render={({ match }) => <SingleUserContainer userId={match.params.id} />}
      />
      <Route exact path="/cars" component={CarsContainers} />
      <Route
        path="/cars/:id"
        render={({ match }) => <SingleCarContainer cardId={match.params.id} />}
      />
      <Redirect from="/" to="/users" />
    </Switch>
  </div>
);

export default Main;
