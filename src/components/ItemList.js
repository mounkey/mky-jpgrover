import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css'; 
import Item from './Item';

export const ItemList = (({item}) =>  {
  return (
    <div className="child">
      {
        item.map((item) =>(
          <Item product= {item} />
        ))
      }
    </div>
  )
});

export default ItemList;