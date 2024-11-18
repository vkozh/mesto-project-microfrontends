import React, { startTransition, useEffect, useState } from "react";
import InputWithValidation from "./InputWithValidation";
import { Link } from 'react-router-dom';

export default function EnterForm({
  title,
  buttonText,
  onSubmit,
  onChange,
  loginLink,
  inputsValues,
}) {
  const [isValidForm, setIsValidForm] = useState(false);
  const [inputValid, setInputValid] = useState({
    email: false,
    password: false,
  });

  const handleValidation = (value) => {
    startTransition(() => {
      setInputValid({ ...inputValid, ...value });
    });
  };

  useEffect(() => {
    startTransition(() => {
      handleValidation({
        email: false,
        password: false,
      });
    });
  }, []);

  useEffect(() => {
    startTransition(() => {
      setIsValidForm(!Object.values(inputValid).every((e) => e));
    });
  }, [inputValid]);

  return (
    <div className="enter container__enter">
      <h2 className="enter__title">{title}</h2>
      <form
        className="enter__form"
        name="enterForm"
        noValidate
        onSubmit={onSubmit}
      >
        <div className="enter__input-container">
          <InputWithValidation
            name="email"
            type="email"
            minLength="2"
            maxLength="40"
            placeholder="Email"
            className="enter__input"
            errorClassName={"enter__input-error"}
            required
            value={inputsValues.email}
            handleValidation={handleValidation}
            onChange={onChange}
          />
          <InputWithValidation
            name="password"
            type="password"
            minLength="2"
            maxLength="40"
            placeholder="Пароль"
            className="enter__input"
            errorClassName={"enter__input-error"}
            required
            value={inputsValues.password}
            handleValidation={handleValidation}
            onChange={onChange}
          />
        </div>
        <div className="enter__button-container">
          <button
            className="enter__button"
            type="submit"
            disabled={isValidForm}
          >
            {buttonText}
          </button>
          <p className="enter__link-container">
            {loginLink && (
              <>
                Уже зарегистрированы?{" "}
                <Link className="enter__link" to={loginLink}>
                  Войти
                </Link>
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  );
}
