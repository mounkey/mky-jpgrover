import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
