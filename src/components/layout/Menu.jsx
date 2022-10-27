import { Link } from 'react-router-dom';
import './menu.css';


const Menu = props => (
    
  <main className="menu">
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/param/1">Param #01</Link>
        </li>
        <li>
          <Link to="/param/2">Param #02</Link>
        </li>
      </ul>
    </nav>
  </main>
);

export default Menu;