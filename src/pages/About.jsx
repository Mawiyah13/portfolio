import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-bg-overlay"></div>

      <h2>About Me</h2>

      <p className="about-intro">
        I’m a B.Tech Information Technology student passionate about building innovative and user-friendly web applications. 
        I love solving problems, learning new technologies, and turning ideas into real-world solutions.
      </p>

      {/* 🎓 Education Section */}
      <div className="education">
        <h3>Education</h3>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="edu-content">
              <h4>Sri Shakthi Institute of Engineering and Technology</h4>
              <p>B.Tech in Information Technology (2023 - 2027)</p>
              <span>Focused on full-stack development, actively working on interesting projects.</span>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-content">
              <h4>Bharathi Matriculation Higher Secondary School</h4>
              <p>HSC (Completed 2023)</p>
              <span>Graduated with strong fundamentals in computer science and mathematics.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 💡 Soft Skills Section */}
      <div className="skills">
        <h3>Soft Skills</h3>
        <div className="skills-tags">
          <span>Problem Solving</span>
          <span>Team Collaboration</span>
          <span>Adaptability</span>
          <span>Time Management</span>
          <span>Creative Thinking</span>
        </div>
      </div>

      {/* 🎨 Hobbies Section */}
      <div className="hobbies">
        <h3>Hobbies</h3>
        <ul>
          <li>Reading Books</li>
          <li>Designing UI Mockups</li>
          <li>Writing Blogs</li>
          <li>Listening to Music</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
