import React from "react";
import { Link } from "react-router-dom";

export default ({ car }) => (
  <div>
    <Link to="/users">
      <h4>Volver al Menu</h4>
    </Link>
    <h2>
      {car.marca} - {car.modelo}
    </h2>
    <h4>Precio: $ {car.precio}</h4>
    {car.user ? (
      <h4>
        Dueño:{" "}
        <Link to={`/users/${car.user.id}`}>
          {car.user.name} {car.user.lastname}
        </Link>
      </h4>
    ) : null}
  </div>
);
