import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Page/About/About';
import Home from './Page/Home/Home';
import Housing from './Page/Housing/Housing';
import NotFound from './Page/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/Housing/:id" element = {<Housing />}/>
        <Route path="/About" element = {<About />}/>
        <Route path="/*" element = {<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
