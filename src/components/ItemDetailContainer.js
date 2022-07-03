import React, {useState, useEffect} from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = (() =>  {
 
   const [swSell,setSwSell] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setSwSell(data);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {
        swSell.map((item) => (
          <div className="row col s12 m12" key={item.id}>
             <ItemDetail item={item} />
          </div>
        ))
      }
      </>
      );
});

export default ItemDetailContainer;