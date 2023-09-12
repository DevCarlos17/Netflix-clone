import { useState } from "react";
import { FORM_STATES } from "../utils/formStates.js";

const useAuthForm = () => {

  const [formState, setFormState] = useState(FORM_STATES.LOGIN);


  const toggleFormSate = () => {
    setFormState((currentVariant) =>
      currentVariant === FORM_STATES.LOGIN
        ? FORM_STATES.REGISTER
        : FORM_STATES.LOGIN
    );
  };
  return { formState, toggleFormSate }
}

export default useAuthForm
