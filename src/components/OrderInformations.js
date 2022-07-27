import React from "react";

const OrderInformations = ({ order }) => {
  console.log(order);
  return (
    <>
      <ul>
        <li>Orden de compra: {order.id}</li>
        <li>Total: {order.Total}</li>
        <li>Iva: {order.IVA}</li>
        <li>Total: {order.TotalFinal}</li>
      </ul><br/><br/><br/>
    </>
  );
}

export default OrderInformations;