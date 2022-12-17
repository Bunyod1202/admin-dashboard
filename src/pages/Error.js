import React from 'react';
import { useNavigate } from 'react-router-dom';
import Errors from '../assets/images/error.jpg'

export const Error = () => {
  const bace = useNavigate()
  return (
    <div>
      <img className='error-img' src={Errors} alt="error" />
      <button className='bace' onClick={()=>bace(-1)} type='button' >GO HOME</button>
    </div>
  );
};

