import React from 'react';
import logo from './logo.svg';
import './App.css';
import Testing from "./components/Testing"
import Header  from "./components/Header.js"
import HomeScreen from "./components/HomeScreen"
import About from "./components/About"
import Projects from  "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
