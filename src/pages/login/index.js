import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  function enter() {
    const page = document.querySelector('div.login-container');
    page.classList.remove('init-page');
    page.classList.add('remove-page');
    setTimeout(() => {
      history.push('/home');
    }, 1000);
  }

  return (
    <div className='login-container init-page'>
      <div>
        <img src='./logo.png' alt='' />
        <input type='text' placeholder='Name' />
        <button type='button' onClick={enter}>Enter</button>
      </div>
    </div>
  );
}

export default Login;
