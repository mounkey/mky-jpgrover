import React, {useEffect, useState} from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import ItemList from './ItemList';
import CircularProgress from '@mui/material/CircularProgress';


export const ItemListContainer =() =>  {

  const [swSell,setSwSell] = useState([])
  const [cargar,setCargar] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setSwSell(data);
        }, 2000);
      })
      .finally(() => setCargar(false))
      .catch((err) => {
        console.log(err);
      });
    }, []);

  return(
    <>
      {
        <div className="parent">
          {cargar ? <CircularProgress color="primary"/>:<ItemList product={swSell} />}
        </div>
      }
    </>
    );
  }
export default ItemListContainer;