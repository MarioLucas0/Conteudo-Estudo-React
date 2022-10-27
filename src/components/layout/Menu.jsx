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
      </ul>
    </nav>
  </main>
);

export default Menu;