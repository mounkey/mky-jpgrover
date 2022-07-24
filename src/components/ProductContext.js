import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { doc, collection, updateDoc, getDoc } from "firebase/firestore";

export const contextoProducto = createContext();
const { Provider } = contextoProducto;

const ProductContext = ({ children }) => {    

  const [cartProduct, setCartProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [stock, setStock] = useState(0);
  const [totalPrecio, setTotalPrecio] = useState(0);
  
    useEffect(() => {
    numberOfProducts(); 
    totalPrice();    
  }, [cartProduct]);
  
  const addProduct = (product, quantity) => {
    let item = cartProduct.find(item => item.id === product.id)
    if (item) {
      item.quantity += item.quantity + quantity;
      setCartProduct([...cartProduct])
    } else {
      setCartProduct([...cartProduct, { ...product }])
    }
  }  

  const removeProduct = (id) => {
    const newProduct = cartProduct.find((element) => element.id === id);
    const index = cartProduct.indexOf(newProduct);
    const aux = [...cartProduct];
    aux.splice(index, 1);
    setCartProduct(aux);
  }

  const clearCart = () => {
    setCartProduct([]);
  }

  const numberOfProducts = () => {
    let total = 0;
    cartProduct.forEach((element) => {
      total += element.quantity;
    }
    );
    setTotal(total);
  }

  const totalPrice = () => {
    let totalPrice = 0; 
    cartProduct.forEach((element) => {
      totalPrice += element.price * element.quantity;
    });
    setTotalPrecio(totalPrice);
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
    <>
      <Provider value={{cartProduct, total, stock, totalPrecio, addProduct, removeProduct, clearCart, numberOfProducts, totalPrice, actualizarStock}}>
        {children}
      </Provider>
    </>
  );
}


export default ProductContext;
