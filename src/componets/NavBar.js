import { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import logo from '../logo.svg';
import M from 'materialize-css';

export default class componentName extends Component {
  componentDidMount(){
    const elemts = document.querySelector('.sidenav');
    M.Sidenav.init(elemts, {});
  }
  render() {
    return (
      <div> 
        <nav>
          <div className='nav-wrapper'>
            <a href="#!" className='brand-logo'><img src={logo} className="App-logo2" alt="logo" /></a>
            <a href="#!" data-target="mobile-demo" className='sidenav-trigger'><i class="material-icons">menu</i></a>
            <ul className='right hide-on-med-and-down'>
              <li><a href="#!">Index</a></li>
              <li><a href="#!">Como comprar</a></li>     
              <li><a href= "#!">Licencias</a></li>
              <li><a href= "#!">Juegos</a></li>
            </ul>
          </div>
        </nav>

        <ul className='sidenav' id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div>
    );
  }
}
