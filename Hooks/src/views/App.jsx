import { BrowserRouter as Router } from 'react-router-dom';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import './App.css';
import { UseCallback } from './examples/UseCallback';
import { UseCustom } from './examples/UseCustom';
import { UseEffect } from './examples/UseEffect';
import { UseMemo } from './examples/UseMemo';
import { UseMyHook } from './examples/UseMyHook';
import { UseContext } from './examples/UserContext';
import { UseRef } from './examples/UseRef';
import { UseReduce } from './examples/UserReducer';


const App = props => (
    
  <div className="app">
    <Router>
      <Menu />
      <Content >
        <UseCallback />
        <UseContext />
        <UseCustom />
        <UseEffect />
        <UseMemo />
        <UseMyHook />
        <UseReduce />
        <UseRef />
        </Content> 
    </Router>
 
  </div>
);

export default App;