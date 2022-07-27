import React, { useContext, useState } from "react";
import { db } from "../firebase/firebase";
import{ addDoc, doc, collection, serverTimestamp, getDoc, updateDoc } from "firebase/firestore"
import { contextoProducto } from "./ProductContext";
import swal from 'sweetalert';
import Order from "./Order";
import { useNavigate } from "react-router-dom";

const CartFinish = () => {

  const Navigate = useNavigate();
  let flag = 0;
  const{ cartProduct, totalPrecio, clearCart } = useContext(contextoProducto);

  const [form, setForm] = useState({});
  const [sendProducts, setSendProducts] = useState(false);
  
  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      form,
      items: cartProduct,
      date: serverTimestamp(),
      Total: totalPrecio,
      IVA: totalPrecio * 0.19, //IVa en Chile es del 19%
      TotalFinal: totalPrecio * 1.19, 
    })
    .then(({id}) => {
      console.log(id);
      let orderid = id;
      actualizarStockDb(cartProduct);
      clearCart();
     Navigate(`/order/${orderid}`); 
     ;
    })
    .catch(error => console.err);
  
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
    flag = 1
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
    {flag === 1 ? <Order send={sendProducts} />: null}
    </>
  );
}

export default CartFinish;