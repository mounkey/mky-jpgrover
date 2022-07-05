import React, {useState, useEffect} from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css'; 
import Item from './Item';

export const ItemList = (() =>  {
 
  const [swSell,setSwSell] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
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
          <div className="child" key={item.id}>
             <Item item={item}/>
          </div>
        ))
        }
      </>

  );
});


export default ItemList;