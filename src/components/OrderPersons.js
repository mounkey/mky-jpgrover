import React from "react";

const OrderPersons = ({ person }) => {

  return (
    <>
      <ul>
              <li>Nombre: {person.nombre}</li>
              <li>Direccion: {person.address}</li>
              <li>Telefono: {person.phone}</li>
              <li>Email: {person.email}</li>
              <li>Ciudad: {person.city}</li>
              <li>Codigo Postal: {person.zip}</li>
              <li>Provincia: {person.state}</li>
            </ul>      
      
    </>
  );
}

export default OrderPersons;