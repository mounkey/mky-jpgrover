import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';
import Count from './ItemCount';

export const Item =(({product}) =>  {
 
  const mensaje = () => {
    alert ('Gracias por su compra');
  }
  
return (
    <>
    {
      < Count stockInitial={5} initial={0} onAdd={mensaje} >
        <main key={product.id}>
          <div className="row">
            <img src="{product.image}" alt="Productos"/>
          </div>
          <div className="row">
            <div className="col s6">
              <h3>product.title</h3>
            </div>
            <div className="col s6">
              <small>{product.category}</small>
            </div>
            <div className="col s12">
              <p>{product.description}</p>  
            </div>
            <div className="col s12 left text">
              <h5>{product.price}</h5>
            </div>
          </div>
        </main>
      </Count>
    }
    </>
  )
});

export default Item;