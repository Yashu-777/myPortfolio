import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import { faUserSecret } from '@fortawesome/free-solid-svg-icons';


function About() {
  return (
    <section id="about" className="portfolio-section">
      <p className="section-text-p1">Get To Know More</p>
      <h2 className="title">About Me</h2>
      <div className="section-container">
        <div className="section__pic-container">
          <FontAwesomeIcon icon={faUserSecret} className="about-pic" />

        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
                <FontAwesomeIcon icon={faSchool} className="icon" />

              <h3>Schooling</h3>
              <br />
              <hr />
              <br />
              <p>10th - CBSE - Sri Chaitanya School, Hosur</p>
              <p>Percentage - 92%</p>
              <p>12th - CBSE - Sishya School, Hosur</p>
              <p>Percentage - 92%</p>
            </div>
            <div className="details-container">
                <FontAwesomeIcon icon={faGraduationCap} className="icon" />
              <h3>College - VIT Chennai</h3>
              <br />
              <hr />
              <br />
              
              <p>B-Tech. Computer Science with specialization in AI&ML</p>
              <p>CGPA - 9.26</p>
            </div>
          </div>
          <div className="text-container">
            <p className="about-me-para">
                As a dedicated computer science student, I've passionately pursued knowledge and excellence in coursework and extracurricular projects. My strong foundation in programming, data structures, and algorithms equips me to tackle complex challenges confidently.
              <br />
              <br />
              Collaborating on software projects has enhanced my practical skills and ability to work in dynamic environments. I aim to bring dedication, adaptability, and a passion for technology to innovative organizations, continuing to grow in the ever-evolving field of computer science.
              <br />
              <br />
              In summary, my journey as a Computer Science student reflects my dedication, adaptability, and passion for technology. I aspire to bring these qualities to a dynamic and forward-thinking organization where I can contribute to innovative projects and continue to grow as a professional in the ever-evolving field of computer science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
