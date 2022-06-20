import React, { useState } from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';


const ItemListContainer =() =>  {
  const [masVendido]= useState(['Windows 11', 'Windows 10', 'Office 365', 'Office 2022']); 
  console.log(masVendido);
  return(
    <div className="listado">
      <ul className="list">
        {
          masVendido.map((items) => (
            <li key ={items.id} ><a href="#!" > <FontAwesomeIcon icon={faGlobe}/> {items}</a></li>
          ))
        }
      </ul>
    </div>
    )}
export default ItemListContainer;