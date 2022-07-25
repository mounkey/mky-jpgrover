import React, { createContext, useState, useEffect } from "react";

export const contextoProducto = createContext();
const { Provider } = contextoProducto;

const ProductContext = ({ children }) => {    

  const [cartProduct, setCartProduct] = useState([]);
  const [total, setTotal] = useState(0);
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

   return (
    <>
      <Provider value={{cartProduct, total, totalPrecio, addProduct, removeProduct, clearCart, numberOfProducts, totalPrice}}>
        {children}
      </Provider>
    </>
  );
}


export default ProductContext;
