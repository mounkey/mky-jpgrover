import React  from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductContext from './components/ProductContext';
import CartFinish from './components/CartFinish';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductContext>
          <NavBar />        
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryID" element={<ItemListContainer/>} />  
            <Route path="/detail/:productID/" element={<ItemDetailContainer/>} /> 
            <Route path="/cart" element={<Cart/>} />
            <Route path="/cartFinish" element={<CartFinish/>} />
          </Routes>
        </ProductContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
