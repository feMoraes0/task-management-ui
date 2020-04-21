import React from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi';

function Infos() {
  const projects = [
    {
      id: 1,
      name: 'Green House',
      abbr: 'GH',
    },
    {
      id: 2,
      name: 'Cyber Punk',
      abbr: 'CP',
    },
    {
      id: 3,
      name: 'Easy Crypto',
      abbr: 'EC',
    },
    {
      id: 4,
      name: 'Travel App',
      abbr: 'TA',
    },
    {
      id: 5,
      name: 'Landing Page',
      abbr: 'LP',
    },
  ];
  return (
    <div className='infos-container'>
      <h2>Hi Samantha</h2>
      <h4>Welcome back to the workspace, we missed You!</h4>
      <form action=''>
        <FiSearch />
        <input type='text' placeholder='Search Task or Project' />
      </form>
      <section className='projects'>
        <h4>Projects</h4>
        <div className='cards'>
          {
            projects.map((project) => (
              <div key={project.id} className='card-project'>
                <div className='card'>
                  <div>
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
