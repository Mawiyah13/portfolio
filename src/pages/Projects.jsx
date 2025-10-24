import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    name: "Portfolio Website",
    description: "A responsive personal portfolio built using React and CSS showcasing my skills and projects.",
    languages: ["React", "CSS", "JavaScript"],
    repo: "https://github.com/username/portfolio",
    color: "blue-cyan"
  },
  {
    name: "Event Management App",
    description: "A full-stack MERN application to manage and register for college events efficiently.",
    languages: ["MongoDB", "Express", "React", "Node.js"],
    repo: "https://github.com/username/event-management",
    color: "purple-pink"
  },
  {
    name: "BlockForensics",
    description: "A blockchain-based forensic analysis system ensuring the integrity and traceability of digital evidence through an immutable ledger.",
    languages: ["React", "API", "HTML", "CSS"],
    repo: "https://github.com/username/blockforensics",
    color: "orange-red"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="projects">
      {/* Gradient Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Content */}
      <div className="projects-content">
        <h2 className="projects-title">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="projects-subtitle">Explore my creative work</p>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="project-card-wrapper"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glow Effect */}
              <div className={`card-glow ${project.color}`} />
              
              {/* Card */}
              <div className="project-card">
                <div className={`corner-accent ${project.color}`} />
                
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.languages.map((lang, i) => (
                    <span
                      key={lang}
                      className={`tech-pill ${project.color} ${hoveredIndex === index ? 'bounce-in' : ''}`}
                      style={{ animationDelay: hoveredIndex === index ? `${i * 0.1}s` : '0s' }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`view-btn ${project.color}`}
                >
                  <span>View Project</span>
                  <svg className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="button-shine" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
