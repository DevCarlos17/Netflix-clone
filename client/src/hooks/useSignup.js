import { useState } from 'react';
import { useSignupMutation } from '../api/authApi.js'

const useSignup = () => {
  const [userData, setUserData] = useState({ username: "", email: '', password: '' });
  const [signupMutation, { data, error, isLoading }] = useSignupMutation();

  const setSignUpData = (e) => setUserData({ ...userData, [e.target.name]: e.target.value })


  const signup = async () => {
    try {
      const response = await signupMutation(userData);
      return response.data;
    } catch (error) {
      console.error(error)
    }
  }
  return { signup, userData, data, error, setSignUpData, isLoading }
}

export default useSignup
