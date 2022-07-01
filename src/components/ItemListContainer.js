import React, { useEffect, useState } from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import Data from '../data';
import ItemList from './ItemList';


export const ItemListContainer =() =>  {
  
  const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(Data);
    }, 2000);
  });

  const [swSell,setSwSell] = useState([])

  useEffect(() => {
    promesa.then(res => {
      setSwSell(res);
    }).catch(err => {
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