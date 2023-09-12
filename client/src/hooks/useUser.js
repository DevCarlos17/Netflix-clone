
import { useDispatch, useSelector } from 'react-redux';
import { clearUserData, selectUserData, setUserData } from '../redux/userSlice.js';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const navitate = useNavigate();
  const setUser = (userData) => {
    dispatch(setUserData(userData));
  };

  const clearUser = () => {
    dispatch(clearUserData());
    navitate("/auth")
  };

  useEffect(() => {
    if (!user) {
      navitate("/auth")
    }


  }, [user])



  return {
    user,
    setUser,
    clearUser,
  };
}

export default useUser