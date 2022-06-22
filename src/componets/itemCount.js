import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.css';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';


const itemCount = ({stock, initial}) => {
  const [contador, setContador] = useState(0);
  
  const sumar = () => {
    setContador(contador + 1);
    avisar(contador);
  }

  const restar= () => {
    setContador(contador -1);
    avisar(contador)
  }

  const reset = () =>{
    setContador(1);
  }

  const avisar = (contador) => {
    if(contador >= 0 ){
      return 'Tu pedido va en camino';
    }
    else{
      return 'No podemos enviar su envio no hay stock';
    }

  }

  return(
    <>
      <h1>Articulo</h1><article>[contador]</article><button onClick={sumar}><FontAwesomeIcon icon ={faPlus}/> Agregar</button><button onClick={restar}><FontAwesomeIcon icon={faMinus}/>disminuir</button><button onClick={reset}><FontAwesomeIcon icon={faPowerOff}/>Restablecer</button><br/><h2>{avisar(stock, initial)}</h2>

    </>
  )
}

export default itemCount