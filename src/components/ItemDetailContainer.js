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
        setSwSell(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {
        swSell.map((itemDetail) => (
          <div className="row col s12 m12" key={itemDetail.id}>
             <ItemDetail item={itemDetail} />
          </div>
        ))
      }
      </>
      );
});

export default ItemDetailContainer;