import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';

const OrderProducts = ({ products }) => {
  return (
    <>
       <table className="striped responsive-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th>Disponible</th>
            </tr>
          </thead>
          <tbody>
        {
          products.map(product => (
            <tr key={product.id}>
              <td><img src={product.image} alt="item" className="cartImg responsive-img"/></td>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.quantity * product.price}</td>
              <td className="center-align">{product.stock > 0 ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faXmark}/>}</td>
              
           </tr>
          ))
        }
          </tbody>
        </table>
      
    </>
  );
}

export default OrderProducts;