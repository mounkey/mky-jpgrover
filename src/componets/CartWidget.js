import 'materialize-css/dist/css/materialize.css';
import '../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


const CartWidget = ({NumberSell}) => {
  return(
    <>
      <a href="#!" className='white-text'>
        <FontAwesomeIcon icon={faCartShopping} /> {NumberSell}
      </a>
    </>
  );
}

export default CartWidget