import React, { createContext, useState } from "react";

export const contexto = createContext([]);

const ProductContext = ({ children }) => {    

  const { Provider } = contexto;

  const [product, setProduct] = useState();
  const [cantidad, setCantidad] = useState();
  
  const addProduct = (item, quantity) => {
    if(product.find((product) => product.id === item.id).length === 0 ) {
      setProduct([...product, 
        {id: item.id, 
        name: item.name, 
        price: item.price,
      }      
    ],
      setCantidad([...cantidad,{
        id: item.id,
        quantity: quantity
      }
    ]));  
    }else{
      alert("EL producto ya esta en el carrito");
    }    
   }

  const removeProduct = (id) => {
    let rmProduct = product.find((product) => product.id !== id)
    let rmCantidad = cantidad.find((cantidad) => cantidad.id !== id)
    setProduct(rmProduct);
    setCantidad(rmCantidad.quantity=0);
  }

  const minusProduct = (id) => {
    let rmCantidad = cantidad.find((cantidad) => cantidad.id === id)
    if(rmCantidad.quantity > 1){
      setCantidad(rmCantidad.quantity--);
    }else{
      removeProduct(id);
    }
  }

  const clearCart = () => {
    setProduct([]);
    setCantidad([]);
  }

  const numberOfProducts = () => {
    let number = 0;
    cantidad.map((product) => number += product.quantity);
    return number;
  }

  const totalPrice = () => {
    let total = 0;
    product.map((product) => total += product.price * cantidad.find((cantidad) => cantidad.id === product.id).quantity);
    return total;
  }


  return (
    <>
      <Provider value={{product, cantidad, addProduct, removeProduct,minusProduct, clearCart, numberOfProducts}}>
        {children}
      </Provider>
    </>
    )
}

export default ProductContext;
