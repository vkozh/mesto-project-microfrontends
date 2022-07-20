import { useEffect, useState } from "react";
import InputWithValidation from "./InputWithValidation";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  buttonText,
}) {
  const [avatar, setAvatar] = useState({ link: "" });
  const [isValidForm, setIsValidForm] = useState(false);
  const [inputValid, setInputValid] = useState({ link: false });
  function handleInputValid(val) {
    setInputValid({ ...val });
  }
  const handleChange = (name, value) => {
    setAvatar({ [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar.link);
  }
  useEffect(() => {
    setAvatar({ link: "" });
    setIsValidForm(false);
  }, [isOpen]);

  useEffect(() => {
    setIsValidForm(Object.values(inputValid).every((e) => e));
  }, [inputValid]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="edit-avatar"
      title="Обновить аватар"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText || "Сохранить"}
      inputValid={inputValid}
      onInputValid={handleInputValid}
      isValidForm={isValidForm}
      handleValidation={handleInputValid}
    >
      <InputWithValidation
        id="avatar-link-input"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        minLength="2"
        maxLength="200"
        required
        onChange={handleChange}
        value={avatar.link || ""}
        handleValidation={handleInputValid}
      />
    </PopupWithForm>
  );
}
