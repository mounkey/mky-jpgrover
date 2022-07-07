import React from 'react';
import { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import logo from '../MKY.png';
import M from 'materialize-css';
import Cart from './CartWidget';
import {Link, Navlink} from 'react-router-dom';


const Navbar = () => {

  Component = () =>{
    const elemts = document.querySelector('.sidenav');
    M.Sidenav.init(elemts, {});
  }

  const categories = [
    { name: "electronics", id: 0, route: "/category/electronics" },
    { name: "jewelery", id: 1, route: "/category/jewelery" },
    { name: "men's clothing", id: 2, route: "/category/men's clothing" },
    { name: "women's clothing", id: 3, route: "/category/women's clothing" },
    
  ];

  
    return (
      <>
        <nav className='navMKY'>
          <div className='nav-wrapper'>
            <a href="#!" className='brand-logo'><img src={logo} className="App-logo2" alt="logo" /></a>
            <a href="#!" data-target="mobile-demo" className='sidenav-trigger'><i className='material-icons'>menu</i></a>
            <ul className='right hide-on-med-and-down'>
              <li><a href="#!">Index</a></li>
              <li><a href="#!">Como comprar</a></li>     
              <li><a href= "#!">Licencias</a></li>
              <li><a href= "#!">Juegos</a></li>
              <li> <Cart NumberSell={5}/></li>
            </ul>
          </div>
        </nav>

        <ul className='sidenav red ' id="mobile-demo">
        <a href="#!" className='brand-logo'><img src={logo} className="App-logo2" alt="logo" /></a>
          <li><a className='white-text' href="#!">Index</a></li>
          <li><a className='white-text' href="#!">Como comprar</a></li>     
          <li><a className='white-text' href= "#!">Licencias</a></li>
          <li><a className='white-text' href= "#!">Juegos</a></li>
          <li><Cart NumberSell={5}/></li>
        </ul>
      </>
    );
  }

export default Navbar;