import React, {useEffect, useState} from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import ItemList from './ItemList';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import { db } from '../firebase/firebase';
import { getDocs, collection, query, where } from "firebase/firestore";


export const ItemListContainer =() =>  {

  const [swSell,setSwSell] = useState([])
  const [cargar,setCargar] = useState(true)

  const {categoryID} = useParams();
  
  useEffect(() => {
    const productCollection = collection(db, 'Products');
  
    let reference
    if ( !categoryID ){
      reference = collection(db, 'Products')
    }
    else{
      reference = query(productCollection, where('category', '==',categoryID))
    }
    
    getDocs(reference)
     .then(result => {
        const lista  = result.docs.map(element => {
          return {
            id: element.id,
            ...element.data(), 
          }
        })
      setSwSell(lista); 
    })
     .catch(error => console.err)
     .finally(() => setCargar(false));
     
    /* const URL = categoryID 
    ? `https://fakestoreapi.com/products/category/${categoryID}` 
    : 'https://fakestoreapi.com/products';
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setSwSell(data))
      .finally(() => setCargar(false))
      .catch((err) => {
        console.log(err);
      });*/
    }, [categoryID]);

  return(
    <>
      {
        <main className="items">
          <div className="parent" key={swSell.id}>
            {cargar ? <CircularProgress color="primary"/>:<ItemList product={swSell} />}
          </div>
        </main>
      }
    </>
    );
  }
export default ItemListContainer;