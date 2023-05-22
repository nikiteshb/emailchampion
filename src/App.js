
import React from 'react'; 
import "./scss/index.scss" 
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import * as ROUTES from "./navigation/Routes"
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Dashboard from './pages/dashboard/Dashboard'; 
import ContactList from './pages/contacts/ContactList';
import CampaignsList from './pages/campaigns/CampaignsList';
import TemplateList from './pages/templates/TemplateList';
import Certificate from './pages/templates/Certificate';
import MusicEvent from './pages/templates/MusicEvent';
import EnergyBill from './pages/templates/EnergyBill';
import NotFound from './pages/error/NotFound';
import ProtectedRoutes from './navigation/ProtectedRoutes';
import Campaign from './pages/campaigns/Campaign';
 
function App() {
  
  return (
    <>
    <Router> 
      <Header/>
        
        <div className="container py-5">          
          <Routes> 
            <Route path={ROUTES.LOGIN} exact element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
            <Route element={<ProtectedRoutes />}>
             <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />  
              <Route path={ROUTES.USERDASHBOARD} element={<Dashboard />} /> 
              <Route path={ROUTES.CONTACTS} element={<ContactList />} /> 
              <Route path={ROUTES.CAMPAIGNS} element={<CampaignsList />} /> 
              <Route path={ROUTES.CAMPAIGN} element={<Campaign />} />
              <Route path={ROUTES.TEMPLATES} element={<TemplateList />} /> 
              <Route path={ROUTES.CERTIFICATE} element={<Certificate />} /> 
              <Route path={ROUTES.MUSICEVENT} element={<MusicEvent/>} />
              <Route path={ROUTES.ENERGYBILL} element={<EnergyBill/>} />
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Routes>  
        </div>
      <Footer/>
    </Router> 
    </>    
  );
}

export default App;

