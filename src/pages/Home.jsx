import React from 'react';
import './Home.css';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <h1 className="fade-in">Hey, I'm <span className="highlight">Mawiyah</span></h1>
        <p className="slide-up">
          I'm a B.Tech IT student passionate about <strong>full-stack development</strong> and building creative, efficient web applications. Welcome to my portfolio, you can find my resume here...
        </p>
        <a href="/resume.pdf" download className="btn pulse">Download Resume</a>
      </div>
      <div className="home-right fade-in-img">
        <img src={profile} alt="Mawiyah" />
      </div>
    </section>
  );
};

export default Home;
