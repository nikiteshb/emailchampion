
import React from 'react'; 
import "./scss/index.scss" 
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import * as ROUTES from "./constants/Routes"
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
function App() {
  return (
    <>
    <Router> 
      <Header/>
        <div className="container py-5">
          <Routes> 
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
          </Routes>  
        </div>
      <Footer/>
    </Router> 
    </>    
  );
}

export default App;

