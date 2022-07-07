import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css'; 
import Item from './Item';

export const ItemList = (({product}) =>  {
 
    return (
      <>
        {
        product.map((item) => (
          <div className="child" key={item.id}>
             <Item item={item}/>
          </div>
        ))
        }
      </>

  );
});


export default ItemList;