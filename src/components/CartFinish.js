import React, { useContext } from "react";
import { db } from "../firebase/firebase";
import{ addDoc, doc, collection, serverTimestamp, getDoc, updateDoc } from "firebase/firestore"
import { contextoProducto } from "./ProductContext";

const CartFinish = ({items}) => {

  const{ cartProduct, totalPrecio, clearcard } = useContext(contextoProducto);

  const datosComprador ={
    nombre: "Juan",
    apellido: "Perez",
    email: "juan.perez@gmail.com"
  }

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador,
      items: cartProduct,
      date: serverTimestamp(),
      Total: totalPrecio,
      IVA: totalPrecio * 0.19, //IVa en Chile es del 19%
      TotalFinal: totalPrecio * 1.19, 
    })
    actualizarStockDb(cartProduct);
    clearcard();
  }

  const actualizarStockDb = (cartProduct) => {
    cartProduct.forEach((element) => {
      actualizarStock(element.id, element.quantity);
    });      
  }

  const actualizarStock = (id, quantity) => {
    let product;
    const productCollection = collection(db, 'Products');
    const referenceDoc = doc(productCollection, id);

    getDoc(referenceDoc)
    .then(result => {
        product = {
          id: result.id,
          stock: result.data().stock - quantity,
       }
        updateDoc(referenceDoc, product)
    })
 
  }

  return (
    <div>
      <button onClick={finalizarCompra}>Finalizar Compra</button>
    </div>
  );
}

export default CartFinish;