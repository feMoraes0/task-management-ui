import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  return (
    <div className='login-container'>
      <div>
        <img src='./logo.png' alt='' />
        <input type='text' placeholder='Name' />
        <button type='button' onClick={() => history.push('/home')}>Enter</button>
      </div>
    </div>
  );
}

export default Login;
