import React, { useContext }  from 'react';
import 'materialize-css/dist/css/materialize.css';
import '../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { contextoProducto } from './ProductContext';

const CartWidget = ({NumberSell}) => {
  
 const {numberOfProducts} = useContext(contextoProducto);

  return(
    <>
      <FontAwesomeIcon icon={faCartShopping} /> {numberOfProducts}
    </>
  );
}

export default CartWidget