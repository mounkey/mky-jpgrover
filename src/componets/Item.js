import React, { useState, useEffect} from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';
import data from '../data/data';

const Item =() =>  {
  
  const Promise = new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
  
  const [swSell,setSwSell] = useState([]);

  useEffect(() => {
    Promise.then(data => {
      setSwSell(data);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      console.log('finally');
    });
  }, []);

  return(
    <>
    {
      swSell.map((item) => {
        return(
          <div id= {item.id}>
            <h3>{item.name}</h3> - <small>{item.category}</small>
            <img src= {item.picture} alt="Producto" className="itemImg" />
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>          
        )
      })
    }
    </>
  )
}

export default Item;