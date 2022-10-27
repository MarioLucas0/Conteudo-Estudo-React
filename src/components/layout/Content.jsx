import { Route, Routes } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import './content.css';

const Content = props => (
    
  <aside className="content">

    <Routes>
      <Route path="/about" element={ <About />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  
  </aside>
);

export default Content;