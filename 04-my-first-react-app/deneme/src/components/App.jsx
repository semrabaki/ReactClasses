import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <div>
     <Router>
        {/* Navbar will fix on every component */}
        <Navbar />

        {/* giving the routing/path to every component individually */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About/>} /> 
          {/* <Route path="/allposts" element={<Post/>} />
          <Route path="/contact" element={<Contact/>} /> */}

          {/* <Route path="/services" >
                 <Services finaldata={demo}/>
          </Route> */}
        </Routes>

        {/* Footer will fix at the bottom of every component */}
        <Footer />
      </Router>
    </div>
  )
}

export default App