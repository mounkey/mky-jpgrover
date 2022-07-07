import React, {useEffect, useState} from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import ItemList from './ItemList';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";


export const ItemListContainer =() =>  {

  const [swSell,setSwSell] = useState([])
  const [cargar,setCargar] = useState(true)

  const {categoryID} = useParams();

  useEffect(() => {
    const URL = categoryID 
    ? `https://fakestoreapi.com/products/category/${categoryID}` 
    : 'https://fakestoreapi.com/products';
    fetch(URL)
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
    }, [categoryID]);

  return(
    <>
      {
        <div className="parent">
          {cargar ? <LinearProgress color="primary"/>:<ItemList product={swSell} />}
        </div>
      }
    </>
    );
  }
export default ItemListContainer;