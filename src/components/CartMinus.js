import React, { useContext } from "react";
import 'materialize-css/dist/css/materialize.css';
import '../App.css'
import { contextoProducto } from "./ProductContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMinus} from '@fortawesome/free-solid-svg-icons';

export const CartMinus = ({item}) => {

  const { removeProduct } = useContext(contextoProducto);

  return(
    <div>
      <button  onClick={() => removeProduct(item)}>
        <FontAwesomeIcon icon ={faMinus}/>
      </button>
   </div>
  )
}

export default CartMinus;