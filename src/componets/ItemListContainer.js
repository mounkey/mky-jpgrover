import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';


const ItemListContainer =() =>  {
  const masVendido= ['Windows 11', 'Windows 10', 'Office 365', 'Office 2022'];
  return(
    <div className="listado">
      <ul className="list">
        {
        masVendido.map((items) => (
          <li><a href="#!" key ={items.id} > <FontAwesomeIcon icon={faGlobe}/> {items}</a></li>
        ))
      }
      </ul>
    </div>
    )}
export default ItemListContainer;