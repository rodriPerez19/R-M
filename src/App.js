import React from 'react'
import { Routes, Route } from "react-router-dom"
import Nav from './components/nav/Nav';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element="home" />
        <Route path="/episode" element="episode" />
        <Route path="/location" element="locaction" />
      </Routes>
    </div>

  );
}

export default App;
