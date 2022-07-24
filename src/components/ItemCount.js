import React, { useState, useContext} from 'react';
import 'materialize-css/dist/css/materialize.css';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faMinus, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {contextoProducto} from './ProductContext';
import swal from 'sweetalert';


const ItemCount = ({item, stockInitial, initial = 0, onAdd}) => {

  const [contador, setContador] = useState(initial)
  const [stock, setStock] = useState(stockInitial)

  const { addProduct } = useContext(contextoProducto);

  const sumar = () => {  
    setContador(contador + 1)
    setStock(stock - 1);
    avisarStock();
  }

  const restar= () => {
    if(contador > 0){
      setContador(contador - 1);
      setStock(stock + 1);      
    }
    else
    {
      setContador(0);
    }
  }

  const reset = () =>{
    setContador(0);
    setStock(stockInitial);
  }

  const avisarStock = () => {
    if(stock > 0 ){
      
    } 
    else{
      swal('No podemos enviar su envio no hay stock', "Gracias", "error");
      setStock(0);
      setContador(contador)     
    }

  }

  const agregarAlCarrito = () => {
    onAdd(contador);
  }

  return(
    <div>
      <div className=" row left text">Stock: {stock}</div>
      <article>{contador}</article>
      <div className="buttonCount">
        <button onClick={sumar}>
          <FontAwesomeIcon icon ={faPlus}/>
        </button>
        <button onClick={restar}>
          <FontAwesomeIcon icon={faMinus}/>
        </button>
        <button onClick={reset}>
          <FontAwesomeIcon icon={faPowerOff}/>
        </button>
        <br/><h2>{avisarStock}</h2>
        <button onClick={() => addProduct({...item, quantity: contador}) ||  agregarAlCarrito()} > Agregar al carrito </button>
      </div>
    </div>
  )
}

export default ItemCount;

