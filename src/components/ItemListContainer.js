import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import ItemList from './ItemList';


export const ItemListContainer =() =>  {

  return(
    <div className="parent">
      <ItemList />
    </div>
    )}
export default ItemListContainer;