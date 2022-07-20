import React, { useEffect, useState } from "react";
import InputWithValidation from "./InputWithValidation";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  buttonText,
}) {
  const [newCard, setNewCard] = useState({ name: "", link: "" });
  const [isValidForm, setIsValidForm] = useState(false);
  const [inputValid, setInputValid] = useState({ name: false, link: false });
  function handleInputValid(val) {
    setInputValid({ ...inputValid, ...val });
  }
  const handleChange = (name, value) =>
    setNewCard({ ...newCard, [name]: value });

  function handleSubmit(e) {
    e.preventDefault();
    if (isValidForm) onAddPlace(newCard);
  }

  useEffect(() => {
    setNewCard({ name: "", link: "" });
    setIsValidForm(false);
  }, [isOpen]);

  useEffect(() => {
    setIsValidForm(Object.values(inputValid).every((e) => e));
  }, [inputValid]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="edit-add-card"
      title="Новое место"
      onClose={onClose}
      buttonText={buttonText || "Создать"}
      onSubmit={handleSubmit}
      inputValid={inputValid}
      onInputValid={handleInputValid}
      isValidForm={isValidForm}
    >
      <InputWithValidation
        id="title-input"
        type="text"
        placeholder="Название"
        name="name"
        minLength="2"
        maxLength="30"
        required
        value={newCard.name}
        onChange={handleChange}
        handleValidation={handleInputValid}
      />
      <InputWithValidation
        id="link-input"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        required
        value={newCard.link}
        onChange={handleChange}
        handleValidation={handleInputValid}
      />
    </PopupWithForm>
  );
}
