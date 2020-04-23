import React from 'react';
import './style.css';
import { FiSearch, FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';

function Infos({
  projects, selected, setSelected, logout,
}) {
  return (
    <div className='infos-container'>
      <h2>
        Hi Fernando
        {' '}
        <button type='button' onClick={logout}>
          <FiLogOut />
        </button>
      </h2>
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
                <button type='button' onClick={() => setSelected(project.id)}>
                  <div className='card' style={{ borderColor: (selected === project.id) ? project.colorOne : 'transparent' }}>
                    <div style={{ background: `linear-gradient(to top right, ${project.colorOne}, ${project.colorTwo})` }}>
                      {project.abbr}
                    </div>
                  </div>
                </button>
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

Infos.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Infos;
