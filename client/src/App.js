//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './components/styles/styles.css'
import LandingPage from './components/pages/LandingPage';
import ShowData from './components/pages/ShowData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
          <Route index element={<LandingPage/>} />
          <Route path="/acuarium" element={<ShowData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
