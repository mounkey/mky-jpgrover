import React, { useContext }  from 'react';
import 'materialize-css/dist/css/materialize.css';
import '../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { contextoProducto } from './ProductContext';

const CartWidget = () => {
  
 const {total} = useContext(contextoProducto);
  
  return(
    <>
      <FontAwesomeIcon icon={faCartShopping} /> {total === 0 ? '' : total}
    </>
  );
}

export default CartWidget