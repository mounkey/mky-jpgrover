import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.js';
import logo from '../MKY.png';
import Cart from './CartWidget';
import { Link, NavLink} from 'react-router-dom';


const Navbar = () => { 

  useEffect(() => {
    let sidenav = document.querySelector('#slide-out'); 
    M.Sidenav.init(sidenav, {}); 
  }, []);

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
            <Link to='/' className='brand-logo'><img src={logo} className="App-logo2" alt="logo" /></Link>
            <link to="#!" data-target="mobile-demo" className="sidenav-trigger"><i classname="material-icons">menu</i></link>
            <ul className='right hide-on-med-and-down'>
              <li><Link to="/">Index</Link></li>
              {
                categories.map((category) => (
                  <li key={category.id}> 
                    <NavLink to={category.route}>
                      {category.name}
                    </NavLink>
                  </li>
                ))
              }
              <li><Link to="/cart"> <Cart NumberSell={5}/></Link></li>
            </ul>
          </div>
        </nav>

        <ul className='sidenav red ' id="mobile-demo">
          <Link to='/' className='brand-logo'><img src={logo} className="App-logo2" alt="logo" /></Link>
          <li><Link to="/">Index</Link></li>
            {
             categories.map((category) => (
              <li key={category.id}> 
                <NavLink to={category.route}>
                  {category.name}
                </NavLink>
              </li>
            ))
            }
            <li><Link to="/cart"> <Cart NumberSell={5}/></Link></li>
        </ul>
      </>
    );
  }
  export default Navbar;
