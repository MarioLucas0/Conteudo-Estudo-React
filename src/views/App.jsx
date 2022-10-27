import { BrowserRouter as Router } from 'react-router-dom';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import './App.css';


const App = props => (
    
  <div className="app">
    <Router>
      <Menu />
      <Content />
    </Router>
 
  </div>
);

export default App;