import React, { useState } from "react";
import EnterForm from "./EnterForm";
import Header from "./Header";

export default function Register({ register, loggedIn }) {
  const [value, setValue] = useState({ email: "", password: "" });
  const handleChange = (name, val) => setValue({ ...value, [name]: val });
  function handleSubmit(e) {
    e.preventDefault();
    register(value.password, value.email).then(() => {
      setValue({ email: "", password: "" });
    });
  }
  return (
    <>
      <Header loggedIn={loggedIn} textButton={"Войти"} link={"/signin"} />
      <EnterForm
        title="Регистрация"
        buttonText="Зарегистрироваться"
        onSubmit={handleSubmit}
        loginLink="/signin"
        onChange={handleChange}
        inputsValues={value}
      />
    </>
  );
}
