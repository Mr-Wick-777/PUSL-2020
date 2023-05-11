// import logo from './logo.svg';
import './App.css';
import LandingPage from "./pages/landing/HomePage"
import Incidents from "./pages/reportIncident/Incidents"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";
import Articles from "./pages/articles/Articles";
import InternalRegister from "./pages/admin/Registration";
import GTFcaptain from "./pages/captain/GTFcaptain";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import PostArticles from "./pages/admin/PostArticles"
import AdminHome from "./pages/admin/AdminHome"
import CaptainHome from "./pages/captain/CaptainHome"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
   
      <Route path="/" element={<LandingPage />} />
      <Route path="/incidents" element={<Incidents />} />
      <Route path="/gtflogin" element={<SignIn />} />
      <Route path="/gtfsignup" element={<SignUp />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/registeremployees" element={<InternalRegister />} />
      <Route path="/manage-incidents" element={<GTFcaptain />} />
      <Route path="/password-reset" element={<ForgotPassword />} />
      <Route path="/post-articles" element={<PostArticles />} />
      <Route path="/cleancityadmin" element={<AdminHome />} />
      <Route path="/cleancitycaptainh" element={<CaptainHome />} />

    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
