import React from "react";
import { Link } from "react-router-dom";

export default ({ user }) => (
  <div>
    <Link to="/users">
      <h4>Volver al Menu</h4>
    </Link>
    <h2>
      {user.name} {user.lastname}
    </h2>
    <h4>DNI {user.dni}</h4>
    <br />
    <h3>Cars</h3>
    <ul>
      {user.cars &&
        user.cars.map((car) => {
          return (
            <li key={car.id}>
              <Link to={`/cars/${car.id}`}>
                {car.marca} - {car.modelo}
              </Link>
              <br />
              Año: {car.year}
              <br />
              Precio: ${car.precio}
            </li>
          );
        })}
    </ul>
  </div>
);
