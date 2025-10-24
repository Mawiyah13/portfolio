import React from 'react';
import './TechStack.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFigma, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const TechStack = () => {
  return (
    <section id="techstack" className="techstack">
      <h2>Tech Stack</h2>

      {/* Top row: Frontend + Backend */}
      <div className="tech-grid">
        {/* Frontend */}
        <div className="tech-category">
          <h3>Frontend</h3>
          <div className="tech-list">
            <div className="tech-item">
              <div className="tech-info"><FaHtml5 className="tech-icon" /> HTML5</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '90%' }}></div></div>
            </div>
            <div className="tech-item">
              <div className="tech-info"><FaCss3Alt className="tech-icon" /> CSS3</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '85%' }}></div></div>
            </div>
            <div className="tech-item">
              <div className="tech-info"><FaJsSquare className="tech-icon" /> JavaScript</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '80%' }}></div></div>
            </div>
            <div className="tech-item">
              <div className="tech-info"><FaReact className="tech-icon" /> React.js</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '75%' }}></div></div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="tech-category">
          <h3>Backend</h3>
          <div className="tech-list">
            <div className="tech-item">
              <div className="tech-info"><FaNodeJs className="tech-icon" /> Node.js</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '75%' }}></div></div>
            </div>
            <div className="tech-item">
              <div className="tech-info"><SiExpress className="tech-icon" /> Express.js</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '70%' }}></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: Database & Tools */}
      <div className="tech-grid below">
        {/* Database */}
        <div className="tech-category">
          <h3>Database</h3>
          <div className="tech-list">
            <div className="tech-item">
              <div className="tech-info"><SiMongodb className="tech-icon" /> MongoDB</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '80%' }}></div></div>
            </div>
            <div className="tech-item">
              <div className="tech-info"><FaDatabase className="tech-icon" /> MySQL</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '70%' }}></div></div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="tech-category">
          <h3>Tools</h3>
          <div className="tech-list">
            <div className="tech-item">
              <div className="tech-info"><FaGitAlt className="tech-icon" /> Git / GitHub</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '80%' }}></div></div>
            </div>
            <div className="tech-item">
              <div className="tech-info"><FaFigma className="tech-icon" /> Figma</div>
              <div className="tech-bar"><div className="tech-level" style={{ '--final-width': '75%' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
