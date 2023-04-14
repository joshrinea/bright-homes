import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Explore from './pages/Explore';
import Guides from './pages/Guides';
import Home from './pages/Home';
import Alphine from './pages/units/Alphine';
import Bulacan from './pages/units/Bulacan';
import Pueblo from './pages/units/elPueblo';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Celine from './pages/units/alphine/Celine';
import PrimeVille from './pages/units/primeville';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <ScrollToTop>
//     <Route path="/" element={<Navbar />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="explore" element={<Explore />} />
//       <Route path="alphine-county" element={<Alphine />} />
//       <Route path="bulacan" element={<Bulacan />} />
//       <Route path="pueblo" element={<Pueblo />} />
//       <Route path="guides" element={<Guides />} />
//     </Route>
//     </ScrollToTop>
//   )
// )

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="explore" element={<Explore />} />
          <Route path="explore/alphine-county" element={<Alphine />} />
          <Route path="explore/bulacan-meadows" element={<Bulacan />} />
          <Route path="explore/el-pueblo" element={<Pueblo />} />
          <Route path="explore/prime-ville" element={<PrimeVille />} />
          <Route path="explore/alphine-county/celine" element={<Celine />} />
          <Route path="guides" element={<Guides />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
