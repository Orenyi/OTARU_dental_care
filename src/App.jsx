import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";

import Footer from "./pages/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking"

import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar/>

      {/* ------------Home with subpages ---------- */}
      <Routes>
        <Route path="/" element={<Home />}></Route>


        <Route path="/about" element={<About />}> </Route>
        <Route path="/booking" element={<Booking/>}></Route>

        
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
