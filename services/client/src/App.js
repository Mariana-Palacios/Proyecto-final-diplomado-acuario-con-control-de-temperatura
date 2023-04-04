import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './components/styles/styles.css'
import LandingPage from './components/pages/LandingPage';
//import ShowData from './components/pages/ShowData';
import NewAquarium from './components/pages/NewAquarium';
import Name from './components/pages/NewAquarium/Name';
//import Data from './components/pages/NewAquarium/Data';
//Aquarium
import Aquarium from './components/pages/Aquarium';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/NewAquarium" element={<NewAquarium />}/>
          <Route path="/Aquarium" element={<Aquarium />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
