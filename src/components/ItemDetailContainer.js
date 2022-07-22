import React, {useState, useEffect} from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { db } from '../firebase/firebase';
import { getDoc, collection, doc  } from "firebase/firestore";

export const ItemDetailContainer = (() =>  {
 
   const [swSell,setSwSell] = useState([])
   const [cargar,setCargar] = useState(true)

   const {productID}= useParams();

  useEffect(() => {
    const productCollection = collection(db, 'Products');
    const referenceDoc = doc(productCollection, productID);
    
    getDoc(referenceDoc)
    .then(result => {
        const product = {
          id: result.id,
          ...result.data(),
        }
        setSwSell(product);
    })
    .catch(error => console.err)
    .finally(() => setCargar(false));

    /*fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setSwSell(data))
      .catch((err) => console.log(err))
      .finally(() => setCargar(false));*/
  }, [productID]);

  

  return (
    <>
      {cargar ? <LinearProgress color="primary"/>:<ItemDetail item={swSell} /> }     
    </>
   );
});

export default ItemDetailContainer;