import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectUserData } from '../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {

  const user = useSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  return user;

}

export default useAuth
