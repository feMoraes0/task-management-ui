import React from 'react';
import './style.css';
import Details from '../../components/details';
import Infos from '../../components/infos';
import projects from '../../assets/projects.json';


function Home() {
  return (
    <div className='home-container'>
      <Infos projects={projects} />
      <Details tasks={projects[0].tasks} />
    </div>
  );
}

export default Home;
