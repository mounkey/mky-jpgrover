import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';
import Count from './ItemCount';

export const ItemDetail = (({item}) => {  

  const mensaje = () => {
    alert ('Gracias por su compra');
  }

  return (
    <>
      {
        <main className="row soloProduct" id= {item.id}>
            <aside>
              <img src={item.image} alt="item" className="itemImg responsive-img"/>
            </aside>
            <article>
              <div className=" col s12 m8">
                <h5 className="itemName">{item.title}</h5>
              </div>
              <div className="col s12 m4">
                <p className="itemPrice"> ${item.price}</p>
              </div>
              <div className="col s12 m12">
                <p className="itemDescription">{item.description}</p>
              </div>
              <div className="col s12 m6">
                <Count stock = {5} onAdd = {mensaje}  />
              </div>
            </article>
        </main>
      }
    </>
  )

});

export default ItemDetail;