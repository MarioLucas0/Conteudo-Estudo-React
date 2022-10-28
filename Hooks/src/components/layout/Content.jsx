import { Route, Routes } from 'react-router-dom';
import NotFound from '../../views/examples/NotFound';
import { UseCallback } from '../../views/examples/UseCallback';
import { UseCustom } from '../../views/examples/UseCustom';
import { UseEffect } from '../../views/examples/UseEffect';
import { UseMemo } from '../../views/examples/UseMemo';
import { UseMyHook } from '../../views/examples/UseMyHook';
import { UseContext } from '../../views/examples/UserContext';
import { UseRef } from '../../views/examples/UseRef';
import { UseReduce } from '../../views/examples/UserReducer';
import './content.css';

const Content = props => (
    
  <aside className="content">

    <Routes>
      <Route path="/usecallback" element={<UseCallback />} />
      <Route path="/usecustom" element={ <UseCustom /> } />
      <Route path="/useeffect" element={<UseEffect /> } />
      <Route path="/usememo" element={<UseMemo />} />
      <Route path="/usemyhook" element={<UseMyHook /> } />
      <Route path="/usecontext" element={<UseContext /> } />
      <Route path="/useref" element={<UseRef /> } />
      <Route path="/usereduce" element={<UseReduce /> } />
      <Route path="*" element={<NotFound />}/>

    </Routes>
  
  </aside>
);

export default Content;