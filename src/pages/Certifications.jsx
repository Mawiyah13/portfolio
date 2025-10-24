import React from 'react';
import './Certifications.css';

import cert1 from '../assets/certifications/cert1.jpg';
import cert2 from '../assets/certifications/cert2.jpg';

const certificates = [
  { name: "Publication of Project", image: cert1 },
  { name: "Generative AI", image: cert2 }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certificates.map(cert => (
          <div key={cert.name} className="cert-card">
            <img src={cert.image} alt={cert.name} />
            <p>{cert.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
