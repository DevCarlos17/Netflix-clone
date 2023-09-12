import logo from "../assets/images/logo_nextflix.png";
import Input from "../components/Input.jsx";
import { FORM_STATES } from "../utils/formStates.js";
import useAuthForm from "../hooks/useAuthForm.js";
import useSignup from "../hooks/useSignup.js";
import useSignin from "../hooks/useSignin.js";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser.js";

const Auth = () => {
  const { formState, toggleFormSate } = useAuthForm();

  const { signin, userData: signInData, setSignInData } = useSignin();
  const { signup, userData: signUpData, setSignUpData } = useSignup();
  const { setUser } = useUser();

  const navigate = useNavigate();

  const handleAuth = (auth) => {
    if (auth?.data?.auth) {
      console.log(auth.data);
      setUser(auth.data.user);
      navigate("/profiles");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let authResponse;
      if (formState === FORM_STATES.LOGIN) {
        authResponse = await signin();
      } else {
        authResponse = await signup();
      }
      handleAuth(authResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative h-full w-full bg-[url('assets/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        {/*NAVBAR*/}
        <nav className="px-12 py-5">
          <img src={logo} alt="logo_netflix" className="h-12" />
        </nav>
        {/*CONTAINER FORM */}
        <div className="flex  justify-center">
          {/*FORM */}
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {formState === FORM_STATES.LOGIN ? "Sign in" : "Register"}
            </h2>
            {/* INPUTS */}
            <div className="flex flex-col gap-4">
              {formState === FORM_STATES.REGISTER && (
                <>
                  <Input
                    label="Username"
                    onChange={setSignUpData}
                    id="username"
                    value={signUpData.username}
                  />
                  <Input
                    label="Email"
                    onChange={setSignUpData}
                    id="email"
                    type="email"
                    value={signUpData.email}
                  />
                  <Input
                    label="Password"
                    onChange={setSignUpData}
                    id="password"
                    type="password"
                    value={signUpData.password}
                  />
                </>
              )}
              {formState === FORM_STATES.LOGIN && (
                <>
                  <Input
                    label="Email"
                    onChange={setSignInData}
                    id="email"
                    type="email"
                    value={signInData.email}
                  />
                  <Input
                    label="Password"
                    onChange={setSignInData}
                    id="password"
                    type="password"
                    value={signInData.password}
                  />
                </>
              )}
            </div>
            {/* BUTTON LOGIN */}
            <button
              onClick={handleSubmit}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {formState === FORM_STATES.LOGIN && "Login"}
              {formState === FORM_STATES.REGISTER && "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {formState === FORM_STATES.LOGIN && "First time using Netflix?"}
              {formState === FORM_STATES.REGISTER && "Alrady have an account?"}
              <span
                onClick={toggleFormSate}
                className="text-white ml-1 hover:underline cursor-pointer">
                {formState === FORM_STATES.LOGIN && "Create an account"}
                {formState === FORM_STATES.REGISTER && "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
