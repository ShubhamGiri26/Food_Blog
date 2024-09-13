import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Components/temp.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Addtocart from "./Components/Addtocart"; 
import Footer from "./Components/Footer";
import Pizza from "./Components/Pizza";
import Cards from "./Components/Cards";
import Sweets from "./Components/Sweets";
import Burger from "./Components/Burger";
import Pasta from "./Components/Pasta";
import Momos from "./Components/Momos";

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/addtocart" element={<Addtocart/>}/>
        <Route path="/cards" element={<Cards/>} />
        <Route path="/pizza" element={<Pizza/>} />
        <Route path="/sweets" element={<Sweets/>} />
        <Route path="/burger" element= {<Burger/>} />
        <Route path="/pasta" element={<Pasta/>} />
        <Route path="/momos" element={<Momos/>} />
        {/* <Route path="/search" element={<Search/>} /> */}
      </Routes>
    </Router>
        <hr></hr> 
        <Footer/>
        
    </>
  );
};

export default App;
