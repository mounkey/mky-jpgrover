import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import '../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const CartWidget = ({NumberSell}) => {
  return(
    <>
      <FontAwesomeIcon icon={faCartShopping} /> {NumberSell}
    </>
  );
}

export default CartWidget