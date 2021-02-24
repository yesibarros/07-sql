import React from "react";

export default ({ users, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Crear Auto</h2>
      <form onSubmit={handleSubmit}>
        <label>Marca:</label>
        <input type="text" name="marca" onChange={handleChange}></input>
        <br />
        <label>Modelo:</label>
        <input type="text" name="modelo" onChange={handleChange}></input>
        <br />
        <label>Year:</label>
        <input type="text" name="year" onChange={handleChange}></input>
        <br />
        <label>Precio:</label>
        <input type="text" name="precio" onChange={handleChange}></input>
        <br />
        <select name="userId" id="userId" onChange={handleChange}>
          <option >-- Seleccione al titular --</option>
          {users &&
            users.map((user) => {
              return (
                <option value={user.id} key={user.id}>
                  {user.name} {user.lastname} DNI: {user.dni}
                </option>
              );
            })}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
