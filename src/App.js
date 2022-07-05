import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MoreSell from './components/ItemListMoreSell';
import Detail from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MoreSell/>
      <ItemListContainer/>
      <Detail/>
    </div>
  );
}

export default App;
