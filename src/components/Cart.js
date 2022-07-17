import React,{ useContext } from "react";
import 'materialize-css/dist/css/materialize.css';
import '../App.css'
import { contextoProducto } from "./ProductContext";

const Cart = () => {
  
  const{ product, cantidad, addProduct, removeProduct, minusProduct, clearCart, numberOfProducts, totalPrice } = useContext(contextoProducto);

  return(
    <>
      hola 
    </>
  )
}

export default Cart;