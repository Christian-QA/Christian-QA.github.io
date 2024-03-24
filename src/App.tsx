//import { useState } from 'react'
//import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'
import './index.css';


function App() {
   return (
       <div className="App">
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <Header />
           <main>
               <About />
               <Projects />
               <Contact />
           </main>
           <Footer />
       </div>
   );
}

export default App
