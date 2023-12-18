import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Electronics from './components/pages/Electronics';
import Books from './components/pages/Books';
import Music from './components/pages/Music';
import Movies from './components/pages/Movies';
import Clothing from './components/pages/Clothing';
import Games from './components/pages/Games';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/books' element={<Books />} />
        <Route path='/music' element={<Music />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/clothing' element={<Clothing />} />
        <Route path='/games' element={<Games />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;