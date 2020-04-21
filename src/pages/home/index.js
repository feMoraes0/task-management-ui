import React from 'react';
import './style.css';
import Details from '../../components/details';
import Infos from '../../components/infos';


function Home() {
  return (
    <div className='home-container'>
      <Infos />
      <Details />
    </div>
  );
}

export default Home;
