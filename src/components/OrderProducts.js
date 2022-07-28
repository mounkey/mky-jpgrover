import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';

const OrderProducts = ({ order }) => {
  console.log(order);
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
          order.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt="producto" className=" cartImg img-responsive" />
              </td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.price * item.quantity}</td>
              <td className="center-align">{item.stock > 0 ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faXmark}/>}</td>
            </tr>
          ))
          }

          </tbody>
        </table>
      
    </>
  );
}

export default OrderProducts;