import React, { useState } from "react";
import EnterForm from "./components/EnterForm";

export default function Login({ login, loggedIn, Header }) {
  const [value, setValue] = useState({ email: "", password: "" });
  const handleChange = (name, val) => {
      setValue({ ...value, [name]: val })
  };

  function handleSubmit(e) {
    e.preventDefault();

      login(value.password, value.email).then(() => {
        setValue({ email: "", password: "" });
      });
  }
  return (
    <>
      {Header && <Header loggedIn={loggedIn} textButton={"Регистрация"} link={"/signup"} />}
      <EnterForm
        title="Вход"
        buttonText="Войти"
        onSubmit={handleSubmit}
        onChange={handleChange}
        inputsValues={value}
      />
    </>
  );
}
