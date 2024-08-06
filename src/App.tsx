import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Navbar } from './components/HomePage/Homepage';
import { Homepage } from './components/HomePage/Homepage';
import { Services } from './components/HomePage/Services';
import { Social_Icons } from './components/HomePage/Top_Social_Icons';
import ServicePage from './components/Services/ServicePage';
import About from './components/About/About';
import { Contact } from './components/Contact/Contact';
import {Footer} from './components/Contact/Footer';
// import TemplatesPage from './components/Template/TemplatePage';

function App() {
  return (
    <Router>
      <div className=''>
        <Social_Icons />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='mb-60 bg-white'>
                  <Homepage />
                </div>
                <div className="px-[1rem] pt-[6rem] bg-[#e8f0f8] w-full text-black ">
                  <Element name="Service">
                    <Services />
                  </Element>
                </div>
                <div className="px-[1rem] py-[3rem] text-black bg-[#ffffff]">
                  <Element name="about">
                    <About />
                  </Element>
                </div>
                <div className="px-[1rem] py-[2rem] text-[#0059a6] bg-[#e8f0f8]">
                  <Element name="contact">
                    <Contact />
                  </Element>
                </div>

                <div className="px-[1rem] py-[2rem] bg-[#0059a6]">
                    <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/Service"
            element={
              <div className="px-[1rem] py-[6rem] text-white">
                <Element name="Service">
                  <Services />
                </Element>
              </div>
            }
          />
          <Route path="/services/:id" element={<ServicePage />} />
          {/* <Route path="/templates" element={<TemplatesPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
