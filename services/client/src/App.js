import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './components/styles/styles.css'
import LandingPage from './components/pages/LandingPage';
import NewAquarium from './components/pages/NewAquarium';
import Aquarium from './components/pages/Aquarium';
import Data from './components/pages/Data';
import Number from './components/pages/Number';
import Name from './components/pages/Number';
import Gmail from './components/pages/Gmail'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/NewAquarium" element={<NewAquarium />}/>
          <Route path="/Aquarium" element={<Aquarium />}/>
          <Route path="/Data" element={<Data />}/>
          <Route path="/Name" element={<Name />}/>
          <Route path="/Gmail" element={<Gmail />}/>
          <Route path="/Number" element={<Number />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
