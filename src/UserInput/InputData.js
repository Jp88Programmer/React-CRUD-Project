import { useState } from "react";

const useInput = (validateValue) => {
  const [enValue, setEnValue] = useState("");
  const [touch, setTouch] = useState(false);

  const valueValid = validateValue(enValue);
  const error = !valueValid && touch;

  const inputValueHandler = (event) => {
    setEnValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setTouch(true);
  };

  const reset = () => {
    setEnValue("");
    setTouch(false);
  };

  return [
    enValue,
    setEnValue,
    setTouch,
    valueValid,
    error,
    inputValueHandler,
    inputBlurHandler,
    reset,
  ];
};

export default useInput;
