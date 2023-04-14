import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './components/styles/styles.css'
import LandingPage from './components/pages/LandingPage';
import NewAquarium from './components/pages/NewAquarium';
import Aquarium from './components/pages/Aquarium';
import Data from './components/pages/Data';
import Number from './components/pages/Number';
import Name from './components/pages/Name';
import Gmail from './components/pages/Gmail'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/Aquarium" element={<Aquarium />}/>
          <Route path="/Data" element={<NewAquarium components={<Data />}/>}/>
          <Route path="/Name" element={<NewAquarium components={<Name />}/>}/>
          <Route path="/Gmail" element={<NewAquarium components={<Gmail />}/>}/>
          <Route path="/Number" element={<NewAquarium components={<Number />}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
