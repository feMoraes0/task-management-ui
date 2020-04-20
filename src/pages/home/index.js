import React from 'react';
import './style.css';
import {
  FiMoreHorizontal, FiCheckCircle, FiCircle, FiPlus,
} from 'react-icons/fi';

function Home() {
  const tasks = [0, 1, 2, 3, 4, 5];
  const tasks2 = [0, 1, 2];

  return (
    <div className='home-container'>
      <p>Hello World</p>
      <div className='details'>
        <header>
          <div className='text'>
            <p className='header-title'>cyber punk</p>
            <p className='header-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ultricies urna, eu venenatis tellus.</p>
          </div>
          <div className='group-avatar'>
            <p>Avatares</p>
          </div>
        </header>
        <section>
          <div className='title'>
            <h5>Today</h5>
            <FiMoreHorizontal size={25} color='silver' />
          </div>
          <div className='tasks'>
            {
              tasks.map((task) => (
                <div className='task'>
                  <p>
                    <FiCheckCircle size={20} />
                    {' '}
                    Duis mollis ultricies urna, eu venenatis tellus.
                  </p>
                  <div className='status'>
                    <p>Approved</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <section>
          <div className='title'>
            <h5>Upcoming</h5>
            <FiMoreHorizontal size={25} color='silver' />
          </div>
          <div className='tasks'>
            {
              tasks2.map((task2) => (
                <div className='task'>
                  <p>
                    <FiCircle size={20} />
                    {' '}
                    Duis mollis ultricies urna, eu venenatis tellus.
                  </p>
                  <div className='status'>
                    <p>Approved</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <button type='button'>
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

export default Home;
