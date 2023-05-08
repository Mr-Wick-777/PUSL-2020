// import logo from './logo.svg';
import './App.css';
import LandingPage from "./pages/landing/HomePage"
import Incidents from "./pages/reportIncident/Incidents"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
   
      <Route path="/" element={<LandingPage />} />
      <Route path="/incidents" element={<Incidents />} />
     
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
