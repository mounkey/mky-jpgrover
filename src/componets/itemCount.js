import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import logo from '../logo.svg';


const ItemCount = ({stock, initial = 3, onAdd}) => {
  const [contador, setContador] = useState(initial)

  
  const sumar = () => {
    setContador(contador + 1)
    avisarStock();
  }

  const restar= () => {
    setContador(contador -1);

  }

  const reset = () =>{
    setContador(1);

  }

  const avisarStock = () => {
    if(setContador >= 0 ){
      
    } 
    else{
      alert('No podemos enviar su envio no hay stock');
      
    }

  }

  return(
    <>
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

