import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Section1 from "./components/Section-1";
import Section2 from "./components/Section-2";
import Section3 from "./components/Section-3";
import Section4 from "./components/Section-4";
import Footer from "./components/Footer";
import './App.css';
import Section5 from "./components/Section-5";

function App() {
    return (
        <>
            <header>
                <Menu/>
                <Hero/>
            </header>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Footer/>
        </>
    );
}

export default App;