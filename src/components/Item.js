import React from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';
import {Link} from "react-router-dom";
import Count from './ItemCount';

export const Item =(({item}) => {
 
return (
    <>
      <div className="row">
        <div>
          <img src={item.image} alt="Product" className="itemImg"/>        
        </div>
        <article className="col s12 m12 l12">
          <small>{item.title}</small>
        </article>
        <div className="col s12 m6 l6 ">
          <p> Price: {item.price}</p>
        </div>
        <div className="col s12 m6 l6">
          <p>Category: {item.category}</p>
        </div>
        <div className="col s12 m12 l12">
        <Count stockInitial={5} onAdd= {'Gracias por su compra'} />
        <Link to={`/detail/${item.id}`} className="waves-effect waves-light btn">Buy</Link>
        </div>
      </div>
    </>
  )
});

export default Item;