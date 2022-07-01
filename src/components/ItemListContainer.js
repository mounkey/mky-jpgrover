import React, { useEffect, useState } from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import ItemList from './ItemList';


export const ItemListContainer =() =>  {


  
  const [swSell,setSwSell] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setSwSell(data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

  return(
    <div className="parent">
      {
        swSell.map((item) =>(
          <div className="child" key={item.id}>
            <ItemList item={swSell} />
          </div>
        ))
      }
    </div>
    )}
export default ItemListContainer;