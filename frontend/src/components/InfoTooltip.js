import React from "react";
import { REG_STATUS_OK } from "../utils/constants";

export default function InfoTooltip({
  isOpen,
  isStatusOk,
  onClose,
  errorMessage,
}) {
  return (
    <div className={`popup infoTooltip ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__icon-close"
          type="button"
          onClick={onClose}
        ></button>
        <div
          className={`infoTooltip__image ${
            isStatusOk
              ? "infoTooltip__image_status_ok"
              : "infoTooltip__image_status_error"
          }`}
          alt="img-status"
        />
        <h2 className="infoTooltip__text">
          {isStatusOk ? REG_STATUS_OK : errorMessage}
        </h2>
      </div>
    </div>
  );
}
