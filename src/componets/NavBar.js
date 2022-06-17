import { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import logo from '../logo.svg';
import M from 'materialize-css';
import Cart from './CartWidget';

export default class Navbar extends Component {
  componentDidMount(){
    const elemts = document.querySelector('.sidenav');
    M.Sidenav.init(elemts, {});
  }
  render() {  
    return (
      <>
        <nav>
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
          <li className='white-text'> <Cart NumberSell={5}/></li>
        </ul>
      </>
    );
  }
}
