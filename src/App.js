import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import MoreSell from './components/ItemListMoreSell';

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
