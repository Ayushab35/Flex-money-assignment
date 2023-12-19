import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Carousel from './components/Carousel';
// import Carousel2 from './components/Carousel2';
import Classes from './pages/classes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Carousel />} />
          <Route path="/about" element={<Classes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
