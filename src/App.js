import logo from './logo.svg';

import Home from './mainpages/Home';
import About from './mainpages/About';
import Food from './mainpages/Food';
import Cart from './mainpages/Cart';
import Contact from './mainpages/Contact';
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ("bootstrap");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/food' element={<Food/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;