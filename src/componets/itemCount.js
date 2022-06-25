import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const ItemCount = ({stock, initial = 3, onAdd}) => {
  const [contador, setContador] = useState(initial)

  
  const sumar = () => {
    setContador(contador + 1);
    
  }

  const restar= () => {
    setContador(contador -1);
  }

  const reset = () =>{
    setContador(1);

  }

  const avisar = () => {
    if(setContador >= 0 ){
      
    }
    else{
      alert('No podemos enviar su envio no hay stock');
    }

  }

  return(
    <>
      <h1>Articulo</h1><article>[contador]</article><button onClick={sumar}><FontAwesomeIcon icon ={faPlus}/> Agregar</button><button onClick={restar}><FontAwesomeIcon icon={faMinus}/>disminuir</button><button onClick={reset}><FontAwesomeIcon icon={faPowerOff}/>Restablecer</button><br/><h2>{avisar(stock, initial)}</h2>

    </>
  )
}

export default ItemCount

