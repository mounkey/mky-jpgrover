import React, {useEffect, useState} from "react";
import '../App.css';
import 'materialize-css/dist/css/materialize.css';  
import ItemList from './ItemList';
import CircularProgress from '@mui/material/CircularProgress';
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
      .then((data) => setSwSell(data))
      .finally(() => setCargar(false))
      .catch((err) => {
        console.log(err);
      });
    }, [categoryID]);

  return(
    <>
      {
        <main className="items">
          <div className="parent">
            {cargar ? <CircularProgress color="primary"/>:<ItemList product={swSell} />}
          </div>
        </main>
      }
    </>
    );
  }
export default ItemListContainer;