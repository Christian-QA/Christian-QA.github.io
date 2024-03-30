//import { useState } from 'react'
//import React from 'react';

import Header from "./components/Header.tsx";
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'
import './index.css';
import React from 'react';

const App: React.FC = () => {



    return (
        <div className="App">
            <Header/>
            <section id="landing">
                <Landing/>
            </section>
            <section id="about">
                <About/>
            </section>
            <section id="experience">
                <Experience/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
            <Footer/>
        </div>
    );
};

export default App;