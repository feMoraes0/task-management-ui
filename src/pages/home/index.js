import React, { useState, useEffect } from 'react';
import './style.css';
import Details from '../../components/details';
import Infos from '../../components/infos';
import projects from '../../assets/projects.json';


function Home() {
  const [selected, setSelected] = useState(1);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // const details = document.querySelector('div.details');
    // details.classList.add('transitionHide');
    // setTimeout(() => {
    //   details.classList.add('transitionShow');
    //   details.classList.remove('transitionHide');
    //   console.log(details);
    // }, 250);
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 10);
  }, [selected]);

  return (
    <div className='home-container'>
      <Infos projects={projects} selected={selected} setSelected={setSelected} />
      {
        (show)
          ? <Details project={projects[selected - 1]} />
          : null
      }
    </div>
  );
}

export default Home;
