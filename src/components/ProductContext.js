
import React, { createContext, useState, useEffect } from "react";

export const contextoProducto = createContext();
const { Provider } = contextoProducto;

const ProductContext = ({ children }) => {    

  const [cartProduct, setCartProduct] = useState([]);
  const [total, setTotal] = useState(0);
  
    useEffect(() => {
    numberOfProducts();
    console.log(cartProduct);
  }, [cartProduct]);
  
  const addProduct = (item, quantity) => {
   
      const newProduct = cartProduct.find((element) => element.id === item.id);
      const index = cartProduct.indexOf(newProduct);
      const aux = [...cartProduct];
      aux[index].quantity += quantity;
      if(isInList(item.id)){
        setCartProduct(aux);
      }else{
        setCartProduct([...cartProduct, aux]);
      }
    }  

  const removeProduct = (id) => {
    const newProduct = cartProduct.find((element) => element.id === id);
    const index = cartProduct.indexOf(newProduct);
    const aux = [...cartProduct];
    aux[index].quantity -= 1;
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
    }
    );
    return totalPrice;
  }
    
  const isInList = (id) => {
   return  cartProduct.same(item => item.id === id);  
  
  } 
  
  return (
    <>
      <Provider value={{cartProduct, total, addProduct, removeProduct, clearCart, numberOfProducts, totalPrice}}>
        {children}
      </Provider>
    </>
    )
  }

export default ProductContext;
