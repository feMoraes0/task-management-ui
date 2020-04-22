import React from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi';

function Infos({ projects }) {
  return (
    <div className='infos-container'>
      <h2>Hi Samantha</h2>
      <h4>Welcome back to the workspace, we missed You!</h4>
      <form action=''>
        <FiSearch />
        <input type='text' placeholder='Search Task or Project' />
      </form>
      <section className='projects'>
        <h4>
          Projects
          {' '}
          <span>(13)</span>
        </h4>
        <div className='cards'>
          {
            projects.map((project) => (
              <div key={project.id} className='card-project'>
                <div className='card' style={{ borderColor: project.colorOne }}>
                  <div style={{ background: `linear-gradient(to top right, ${project.colorOne}, ${project.colorTwo})` }}>
                    {project.abbr}
                  </div>
                </div>
                <p className='project-name'>{project.name}</p>
              </div>
            ))
          }
          <div className='card-project extra-card'>
            <div className='card'>
              <div>
                8+
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Infos;
