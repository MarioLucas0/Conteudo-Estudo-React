import { Link } from 'react-router-dom';
import './menu.css';


const Menu = props => (
    
  <main className="menu">
    <nav>
      <ul>
        <li>
          <Link to="/usecallback">useCallback</Link>
        </li>
        <li>
          <Link to="/usecustom">useCustom</Link>
        </li>
        <li>
          <Link to="/useeffect">useEffect</Link>
        </li>
        <li>
          <Link to="/usememo">useMemo</Link>
        </li>
        <li>
          <Link to="/usemyhook">useMyhook</Link>
        </li>
        <li>
          <Link to="/usecontext">useContext</Link>
        </li>
        <li>
          <Link to="/useref">useRef</Link>
        </li>
        <li>
          <Link to="/usereduce">useReduce</Link>
        </li>
        <li>
          <Link to="/usestate">useState</Link>
        </li>
      </ul>
    </nav>
  </main>
);

export default Menu;