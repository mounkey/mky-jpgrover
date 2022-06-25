import React, { useState } from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';

const ItemListContainer =() =>  {
  const [masVendido,setmasVendido] = useState([{id: 1, prod: 'Windows 11'}, {id: 2, prod: 'Windows 10'}, {id:3, prod: 'Microsoft 365'}, {id: 4, prod: 'Office 2022'}])
  return(
    <div className="listado">
      <ul className="list">
        {
          masVendido.map((item) => (
            <li key ={item.id} ><a href="#!" > <FontAwesomeIcon icon={faGlobe}/> {item.prod}</a></li>
          ))
        }
      </ul>
    </div>
    )}
export default ItemListContainer;