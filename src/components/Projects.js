import React from 'react';

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-container">
        <div className="project">
          <h3 className="project-title">Project 1</h3>
          <br />
          <hr />
          <br />
          <p className="project-description">
          I developed a Movie Recommendation System using advanced Machine Learning techniques, complemented by a user-friendly frontend created with HTML, CSS, and Bootstrap. Flask, a robust web framework, seamlessly connects the frontend with the powerful recommendation engine. This system analyzes your movie preferences and offers tailored recommendations, ensuring you discover the perfect movie. The combination of frontend and Flask backend provides a responsive and intuitive user experience.          </p>
          <a
            href="https://github.com/Yashu-777/MOVIE_Recommendation"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>
        <div className="project">
          <h3 className="project-title">Project 2</h3>
          <br />
          <hr />
          <br />
          <p className="project-description">
          I've meticulously engineered a robust React-based web application, empowering users to effortlessly create, edit, and organize their blogs. Leveraging the versatility of React, this platform ensures a seamless and responsive experience. It simplifies the process of writing and updating blogs, providing an intuitive user interface. From drafting to publication, this React app streamlines your blogging journey, offering unparalleled efficiency and flexibility in managing your content.          </p>
          <a
            href="https://github.com/Yashu-777/React__MyBlogsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
