import React, { createContext } from "react";

export const contexto = createContext([{name: 'Juan' },{name: 'Pablo'}])
const ProductContext = ({ children }) => {    

  const contexto  = createContext();
  console.log(contexto);

  return (
    <>
      {children}
    </>
    )
}

export default ProductContext;
 