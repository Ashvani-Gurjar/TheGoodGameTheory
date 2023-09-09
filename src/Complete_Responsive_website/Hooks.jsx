import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';


import Footer from './Footer';
import Navbar from './Navbar';
import Service from './Services';
import Contact from './Contact';
import None from './404';

const App = () =>{
     return (
          <>
          
          <Navbar/>
          <Routes> 
              <Route path='/' element={<Contact/>} /> 
              <Route path='/service' element={<Service/>} />
              <Route path='*' element={<None/>} /> 
           </Routes>
          <Footer/>
          </>
     )
}

export default App;