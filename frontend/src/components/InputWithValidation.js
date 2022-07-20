import React, { useEffect, useState } from "react";

export default function InputWithValidation({
  handleValidation,
  errorClassName,
  value,
  onChange,
  isOpenPopup,
  ...inputProps
}) {
  const [errorMessage, setErrorMessage] = useState("");
  const checkValidity = (e) => {
    const input = e.target;
    const isValid = input.validity.valid;
    if (isValid) setErrorMessage("");
    onChange(inputProps.name, input.value);
    handleValidation({ [inputProps.name]: isValid });
  };

  const handleBlur = (e) => setErrorMessage(e.target.validationMessage);

  useEffect(() => {
    setErrorMessage("");
  }, [isOpenPopup]);

  useEffect(() => {
    handleValidation({ [inputProps.name]: false });
  }, []);

  return (
    <>
      <input
        {...inputProps}
        value={value || ""}
        onChange={checkValidity}
        onBlur={handleBlur}
      />
      <p className={errorClassName}>{errorMessage}</p>
    </>
  );
}
