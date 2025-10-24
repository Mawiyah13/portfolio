import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
      <footer className="footer">
        <a href="mailto:yourmail@example.com">📧</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
