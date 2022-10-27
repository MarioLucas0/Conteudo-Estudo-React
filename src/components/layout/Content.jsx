import { Route, Routes } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import './content.css';

const Content = props => (
    
  <aside className="content">

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={ <About />} />
      <Route path="/param/:id" element={<Param />} />
    </Routes>
  
  </aside>
);

export default Content;