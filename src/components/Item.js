import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';
import Count from './ItemCount';

export const Item =({product}) =>  {

  const mensaje = () => {
    alert ('Gracias por su compra');
  }
return (
    <>
    {
      product.map((item) => {
        return(
          <Count stock={item.stock} onAdd ={mensaje} >
            <div id= {item.id}>
              <h3>{item.name}</h3> - <small>{item.category}</small>
              <img src= {item.picture} alt="Producto" className="itemImg" />
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>          
          </Count>
        )
      })
    }
    </>
  )
}

export default Item;