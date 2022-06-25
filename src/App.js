import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import MoreSell from './componets/itemListMoreSell';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MoreSell/>
      <ItemListContainer/>
     
    </div>
  );
}

export default App;
