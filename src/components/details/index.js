import React from 'react';
import './style.css';
import {
  FiMoreHorizontal, FiCheckCircle, FiCircle, FiPlus, FiPlusCircle,
} from 'react-icons/fi';
import PropTypes from 'prop-types';

function Details({ tasks }) {
  const statusColors = {
    approved: {
      bgColor: '#E0F5F4',
      color: '#58BDBC',
    },
    'in progress': {
      bgColor: '#E3EFFD',
      color: '#72ABF3',
    },
    'in review': {
      bgColor: '#FCEEE8',
      color: '#F19C80',
    },
    waiting: {
      bgColor: '#ECEEF0',
      color: '#838F9E',
    },
  };

  const sharedWith = [
    {
      id: 1,
      img: 'https://mediarepository.codemotionworld.com/img/users/1194.jpg',
    },
    {
      id: 2,
      img: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg',
    },
    {
      id: 3,
      img: 'https://miro.medium.com/max/1228/1*swEsfQdCfFAyOPWMgqL7wg.jpeg',
    },
  ];

  return (
    <div className='details'>
      <header>
        <div className='text'>
          <p className='header-title'>cyber punk</p>
          <p className='header-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ultricies urna, eu venenatis tellus.</p>
        </div>
        <div className='group-avatar'>
          {
              sharedWith.map((person) => (
                <div key={person.id} className='circle-avatar' style={{ zIndex: 10 / person.id }}>
                  <img src={person.img} alt='person' />
                </div>
              ))
            }
          <FiPlusCircle size={30} color='silver' />
        </div>
      </header>
      <section>
        <div className='title'>
          <h5>Today</h5>
          <FiMoreHorizontal size={25} color='silver' />
        </div>
        <div className='tasks'>
          {
              tasks.today.map((today) => (
                <div key={today.id} className='task'>
                  <p>
                    { (today.checked) ? <FiCheckCircle size={20} color='#67DAD9' /> : <FiCircle size={20} /> }
                    {' '}
                    {today.text}
                  </p>
                  <div className='status' style={{ backgroundColor: statusColors[today.status].bgColor }}>
                    <p style={{ color: statusColors[today.status].color }}>{today.status}</p>
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
              tasks.upcoming.map((upcoming) => (
                <div key={upcoming.id} className='task'>
                  <p>
                    { (upcoming.checked) ? <FiCheckCircle size={20} color='#67DAD9' /> : <FiCircle size={20} /> }
                    {' '}
                    {upcoming.text}
                  </p>
                  <div className='status' style={{ backgroundColor: statusColors[upcoming.status].bgColor }}>
                    <p style={{ color: statusColors[upcoming.status].color }}>{upcoming.status}</p>
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
  );
}

Details.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Details;
