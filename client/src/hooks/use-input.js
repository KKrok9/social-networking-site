import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  

  return {
    value: enteredValue,
    valueIsValid : valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;

/*
validateValue - function which we pass to validate input
enteredVal/setEnteredVal - state of input
isToyched,setIsTouched - we need this to make errors, we cant raise error if input hasnt been touched
valueIsValud - true/false - using passed function
hasError - if valueIsValid = false and isTouched = true then hasError = true
*/
