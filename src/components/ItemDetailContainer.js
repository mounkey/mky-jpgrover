import React, {useState, useEffect} from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";

export const ItemDetailContainer = (() =>  {
 
   const [swSell,setSwSell] = useState([])
   const [cargar,setCargar] = useState(true)

   const {productID}= useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setSwSell(data))
      .catch((err) => console.log(err))
      .finally(() => setCargar(false));
  }, [productID]);

  console.log(swSell);


  return (
    <>
      {cargar ? <LinearProgress color="primary"/>:<ItemDetail item={swSell} /> }     
    </>
   );
});

export default ItemDetailContainer;