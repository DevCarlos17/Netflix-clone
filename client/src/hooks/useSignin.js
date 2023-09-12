import { useState } from "react";
import { useSigninMutation } from "../api/authApi.js"

const useSignin = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [signinMutation, { data, isLoading, error }] = useSigninMutation();
  const setSignInData = (e) => setUserData({ ...userData, [e.target.name]: e.target.value })

  const signin = async () => {
    try {
      const response = await signinMutation(userData)
      return response
    } catch (error) {
      console.error(error)
    }
  }


  return { signin, userData, setSignInData, data, error, isLoading }
}

export default useSignin
