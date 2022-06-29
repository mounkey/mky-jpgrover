import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import logo from '../logo.svg';


const ItemCount = ({stockInitial, initial = 0, onAdd}) => {
  const [contador, setContador] = useState(initial)
  const [stock, setStock] = useState(stockInitial)

  
  const sumar = () => {    
    setContador(contador + 1)
    setStock(stock - 1);
    avisarStock();
  }

  const restar= () => {
    setContador(contador - 1);
    setStock(stock + 1);
    avisarStock();
  }

  const reset = () =>{
    setContador(1);
  }

  const avisarStock = () => {
    if(stock > 0 ){
      
    } 
    else{
      alert('No podemos enviar su envio no hay stock');
      setStock(0);
      setContador(contador)     
    }

  }

  return(
    <>
      <div className="left text">Stock: {stock}</div>
      <img src={logo} className="itemImg" alt="logo" />
      <article>{contador}</article>
      <div className="buttonCount">
        <button onClick={sumar}><FontAwesomeIcon icon ={faPlus}/></button><button onClick={restar}><FontAwesomeIcon icon={faMinus}/></button><button onClick={reset}><FontAwesomeIcon icon={faPowerOff}/></button><br/><h2>{avisarStock}</h2>
      </div>
      <button onClick={onAdd}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount

