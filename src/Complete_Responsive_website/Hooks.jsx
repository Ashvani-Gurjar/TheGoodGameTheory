import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Contact from  './Contact';
import Service from './Services'
import None from './404';
import Footer from './Footer';
import Navbar from './Navbar';

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