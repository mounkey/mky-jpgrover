import React, { useContext, useState } from "react";
import { db } from "../firebase/firebase";
import{ addDoc, doc, collection, serverTimestamp, getDoc, updateDoc, query, where } from "firebase/firestore"
import { contextoProducto } from "./ProductContext";
import swal from 'sweetalert';

const CartFinish = () => {

  const{ cartProduct, totalPrecio, clearCart } = useContext(contextoProducto);

  const [form, setForm] = useState({});
  const [sendProducts, setSendProducts] = useState(false);
  
  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      form,
      items: cartProduct,
      date: serverTimestamp(),
      total: totalPrecio,
      IVA: totalPrecio * 0.19, //IVa en Chile es del 19%
      totalFinal: totalPrecio * 1.19, 
    })
    let order = {
      form,
      items: cartProduct,
      date: serverTimestamp(),
      total: totalPrecio,
      IVA: totalPrecio * 0.19, //IVa en Chile es del 19%
      totalFinal: totalPrecio * 1.19,
    };
    actualizarStockDb(cartProduct);
    clearCart();
    validarStock(cartProduct.id, cartProduct.quantity);
    obtenerIdVenta(order)
  }

  const obtenerIdVenta = (order) => {
    const ventasCollection = collection(db, 'ventas');
    const q = query(ventasCollection, where('totalFinal', '==', order.totalFinal), where('IVA', '==', order.IVA), where('Total', '==', order.Total),where("form.name", "==", order.form.name), where("form.lastName", "==", order.form.lastName), where("form.email", "==", order.form.email), where("form.address", "==", order.form.address), where("form.phone", "==", order.form.phone));  
    getDoc(q)
      .then(result => {
        const lista  = result.docs.map(element => {
          return {
            id: element.id,
            ...element.data(), 
          }
        })
        setSendProducts(lista); 
      }).catch(error => console.err)
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

  const validarStock = (id, quantity) => {
    let product;
    const productCollection = collection(db, 'Products');
    const referenceDoc = doc(productCollection, id);
    getDoc(referenceDoc)
    .then(result => {
        product = {
          id: result.id,
          stock: result.data().stock - quantity,
       }
      product.stock < 0 ? swal("No hay stock suficiente", "Gracias", "Error") : swal("Compra realizada", "Gracias", "success");
    })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    finalizarCompra();
    
  }

  return (
    <>
    <div className="container">
      <h3>Formulario de Envio </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Name'>Name</label>
        <input type="text" value={form.name} name= "nombre" onChange={handleChange} />
        <label htmlFor='email'>Email</label>
        <input type="text" value={form.email} name="email" onChange={handleChange} />
        <label htmlFor='phone'>Phone</label>
        <input type="text" value={form.phone} name="phone" onChange={handleChange} />
        <label htmlFor='city'>City</label>
        <input type="text" value={form.city} name="city" onChange={handleChange} />
        <label htmlFor='address'>Address</label>
        <input type="text" value={form.address} name="address" onChange={handleChange} />
        <label htmlFor='zip'>Codigo de area</label>
        <input type="text" value={form.zip} name="zip" onChange={handleChange} />
        <label htmlFor='state'>Provincia</label>
        <input type="text" value={form.state} name="state" onChange={handleChange} />
        <label htmlFor='country'>Pais </label>
        <input type="text" value={form.country} name="country" onChange={handleChange} />
        <button type="submit">Enviar</button> 
      </form>
      
    </div>
    </>
  );
}

export default CartFinish;