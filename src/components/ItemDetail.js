import React, { useState } from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';
import Count from './ItemCount';
import { Link } from "react-router-dom";

export const ItemDetail = ({item}) => {  

  const [itemSell, setItemSell] = useState(false);
  
  
  const onAdd = (count) => {
    setItemSell(true);
  }
 
  return (
    <main className="itemsdetails">
      <div className="row" id= {item.id}>
        <div className="col s12 m6">
          <img src={item.image} alt="item" className="itemImg responsive-img"/>
        </div>
        <div className="col s12 m6">
          <div className="col s12">
            <h5 className="itemName">{item.title}</h5>
          </div>
          <div className="col s12">
          <p className="itemDescription">{item.description}</p>
          </div>
          <div className="col s12">
            <p className="itemPrice"> {item.price}</p>
          </div>
          <div className="col s12">
            {
              itemSell ? <Link to="/cart"><button className="waves-effect waves-light btn-large">Finalizar Compra</button></Link> : <Count item= {item} stockInitial={item.stock} onAdd= { onAdd } />
            }
          </div>
        </div>
      </div>
    </main> 
  )
};

export default ItemDetail;