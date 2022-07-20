import React from "react";

export default function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  children,
  onSubmit,
  buttonText,
  isValidForm,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__icon-close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={`popup${name}Form`}
          onSubmit={onSubmit}
          noValidate
        >
          {React.Children.map(children, (c) =>
            React.cloneElement(c, {
              className: "popup__input",
              errorClassName: "popup__input-error",
              isOpenPopup: isOpen,
            })
          )}
          <button
            className={`popup__submit-button ${
              isValidForm ? "" : "popup__submit-button_disabled"
            }`}
            type="submit"
            disabled={!isValidForm}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
