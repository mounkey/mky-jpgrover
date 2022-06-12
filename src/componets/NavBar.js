import 'materialize-css/dist/css/materialize.css';
import logo from '../logo.svg';

function  Navbar(){
  return(

    <nav>
      <div className='nav-wrapper'>
        <a href="#!" className='brand-logo'><img src={logo} className="App-logo2" alt="logo" /></a>
        <ul className='right hide-on-med-and-down'>
          <li><a href="#!">Index</a></li>
          <li><a href="#!">Como comprar</a></li>     
          <li><a href= "#!">Licencias</a></li>
          <li><a href= "#!">Juegos</a></li>
        </ul>
      </div>

    </nav>


  );
}
export default Navbar;
