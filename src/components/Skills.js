import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faReact} from '@fortawesome/free-brands-svg-icons';
import { faNodeJs} from '@fortawesome/free-brands-svg-icons';

import flaskIcon from '../images/flask-icon.png'
import cppIcon from "../images/cpp-icon.png"
import pyIcon from "../images/python-icon.png"
import javaIcon from "../images/java-icon.png"

function Skills() {
  return (
    <section id="Skills">
      <p className="title">My Skills</p>
      <div className="experience-details-container">
        <div className="about-containers">
          

        <div className="details-container">
          <h2 className="experience-sub-title">Programming Languages</h2>
          <div className="article-container">
            <article>
              <img src={cppIcon} alt="C++ Icon" className="icon" />
              <div>
                <h3>C/C++</h3>
              </div>
            </article>
            <article>
              <img src={pyIcon} alt="Python Icon" className="icon" />
              <div>
                <h3>Python</h3>
              </div>
            </article>
            <article>
              <img src={javaIcon} alt="Java Icon" className="icon" />
              <div>
                <h3>Java</h3>
              </div>
            </article>
          </div>
        </div>


          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <FontAwesomeIcon icon={faNodeJs} className="icon" />
                <div>
                  <h3>Node</h3>
                </div>
              </article>


              <article>
                <img src={flaskIcon} alt="Flask Icon" className="icon" />
                <div>
                  <h3>Flask</h3>
                </div>
              </article>

            </div>
          </div>
        </div>




        <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <FontAwesomeIcon icon={faHtml5} className="icon" />
                <div>
                  <h3>HTML</h3>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faCss3} className="icon" />
                <div>
                  <h3>CSS</h3>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faSquareJs} className="icon" />
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>

              <article>
                <FontAwesomeIcon icon={faReact} className="icon" />
                <div>
                  <h3>React</h3>
                </div>
              </article>

            </div>
          </div>
        

        
      </div>
    </section>
  );
}

export default Skills;
