import React, { startTransition, useEffect, useState } from "react";

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
    if (isValid) {
      startTransition(() => {
        setErrorMessage("");
      })
    }
    startTransition(() => {
      onChange(inputProps.name, input.value);
      handleValidation({ [inputProps.name]: isValid });
    });
  };

  const handleBlur = (e) => {
    startTransition(() => {
      setErrorMessage(e.target.validationMessage);
    });
  };

  useEffect(() => {
    startTransition(() => {
      setErrorMessage("");
    });
  }, [isOpenPopup]);

  useEffect(() => {
    startTransition(() => {
      handleValidation({ [inputProps.name]: false });
    });
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
