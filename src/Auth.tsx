import React, { useState } from 'react';
import './Auth.css';

const Auth: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'artem' && password === '123') {
      setState('Успешный вход!');
    } else {
      setState('Неверные данные! Попробуйте ещё');
    }
  };

  return (
    <div className='auth-container'>
      <h2>Авторизация</h2>
      <form onSubmit = {handleSubmit}>
        <div>
          <label htmlFor = "username">Логин:</label>
          <input
            type = "text"
            id = "username"
            value={username}
            onChange = {(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor = "password">Пароль:</label>
          <input
            type = "password"
            id = "password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type = "submit">Войти</button>
      </form>
      {state && <p>{state}</p>}
    </div>
  );
};

export default Auth;
