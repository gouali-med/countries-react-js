import React from 'react';
import './App.css';
import Sidebar from './components/template/Sidebar';
import Navbar from './components/template/Navbar';
import Main from './components/template/Main';
import Product from './components/Products/Product';
import GetCountries from './components/Countries/GetCountries';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
     <Navbar></Navbar>
      <Routes>
        <Route path="/product" element={ <Product/>} />
        <Route path="/GetCountries" element={ <GetCountries/>} />
      </Routes>
    </Router>
     
      
    </>
   
  );
}

export default App;
