import React from "react";
import { Link } from "react-router-dom";

export default ({ cars }) => (
  <div>
    <h2>CARS</h2>
    <table>
      <thead>
        <tr>
          <td>
            <h4>Marca</h4>
          </td>
          <td>
            <h4>Modelo</h4>
          </td>
          <td>
            <h4>Dueño</h4>
          </td>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => {
          return (
            <tr key={car.id}>
              <td>
                <h4>
                  <Link to={`/cars/${car.id}`}>{car.marca}</Link>
                </h4>
              </td>
              <td>
                <h4>
                  <Link to={`/cars/${car.id}`}>{car.modelo}</Link>
                </h4>
              </td>
              <td>
                <h4>
                  <Link to={`/users/${car.user.id}`}>
                    {car.user.name} {car.user.lastname}
                  </Link>
                </h4>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
