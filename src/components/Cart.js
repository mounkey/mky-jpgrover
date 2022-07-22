import React,{ useContext } from "react";
import 'materialize-css/dist/css/materialize.css';
import '../App.css'
import { contextoProducto } from "./ProductContext";
import CartMinus from "./CartMinus";
import {Link} from "react-router-dom";

const Cart = () => {
  
  const{ cartProduct, clearCart, total, totalPrice } = useContext(contextoProducto);
  
  return(
    <>
      <main className="container row">
        <table className="striped responsive-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th>Eliminar</th>
              <th>Enlace al Producto</th>
            </tr>
          </thead>
          <tbody>
        {
          cartProduct.map(product => (
            <tr key={product.id}>
              <td><img src={product.image} alt="item" className="cartImg responsive-img"/></td>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.quantity * product.price}</td>
              <td> Eliminar Producto <CartMinus/> </td>
              <td>  <Link to={`/detail/${product.id}`} className="waves-effect waves-light btn">See</Link></td>           
           </tr>
          ))
        }
          </tbody>
        </table>
        <div className="col s12 m4">
          <p>Total: {totalPrice()}</p>
        </div>
        <div className="col s12 m4">
          <p>Cantidad de Productos: {total}</p>
        </div>
        <div className="col s12 m4">
          <button className="waves-effect waves-light btn" onClick={clearCart}>Vaciar</button>
        </div>
        <br/>
        <div className="col s12">
          {total === 0 ? <Link to="/"><button className="waves-effect waves-light btn">Volver</button></Link> : <Link to="/cartFinish"><button className="waves-effect waves-light btn">Finalizar Compra</button></Link>}
        </div>
        
        
      </main>
    </>
  )
}

export default Cart;