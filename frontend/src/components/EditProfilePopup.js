import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import InputWithValidation from "./InputWithValidation";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  buttonText,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [user, setUser] = useState({ name: "", about: "" });
  const [isValidForm, setIsValidForm] = useState(false);
  const [inputValid, setInputValid] = useState({});
  function handleInputValid(val) {
    setInputValid({ ...val });
  }
  const handleChange = (name, value) => setUser({ ...user, [name]: value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(user.name, user.about);
  };

  useEffect(() => {
    setUser({ name: currentUser.name, about: currentUser.about });
    setIsValidForm(false);
  }, [currentUser, isOpen]);

  useEffect(() => {
    setIsValidForm(Object.values(inputValid).every((e) => e));
  }, [inputValid]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="edit-profile"
      title="Редактировать профиль"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText || "Сохранить"}
      inputValid={inputValid}
      onInputValid={handleInputValid}
      isValidForm={isValidForm}
    >
      <InputWithValidation
        id="name-input"
        type="text"
        placeholder="Имя"
        name="name"
        minLength="2"
        maxLength="40"
        required
        value={user.name || ""}
        onChange={handleChange}
        handleValidation={handleInputValid}
      />
      <InputWithValidation
        id="job-input"
        type="text"
        placeholder="О себе"
        name="about"
        minLength="2"
        maxLength="200"
        required
        value={user.about || ""}
        onChange={handleChange}
        handleValidation={handleInputValid}
      />
    </PopupWithForm>
  );
}
