import React, { useState, useEffect } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import Details from '../../components/details';
import Infos from '../../components/infos';
import projects from '../../assets/projects.json';


function Home() {
  const [selected, setSelected] = useState(1);
  const [show, setShow] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 1);
  }, [selected]);

  function logout() {
    const page = document.querySelector('div.home-container');
    page.classList.remove('init-page');
    page.classList.add('remove-page');
    setTimeout(() => {
      history.push('/');
    }, 1000);
  }

  return (
    <div className='home-container init-page'>
      <Infos projects={projects} selected={selected} setSelected={setSelected} logout={logout} />
      {
        (show)
          ? <Details project={projects[selected - 1]} />
          : null
      }
    </div>
  );
}

export default Home;
