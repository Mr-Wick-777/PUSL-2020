// import logo from './logo.svg';
import './App.css';
import LandingPage from "./pages/landing/HomePage"
import Incidents from "./pages/reportIncident/Incidents"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/incidents" element={<Incidents />} />
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
