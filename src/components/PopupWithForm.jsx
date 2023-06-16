function PopupWithForm({ name, title, buttonSave, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate="">
          {children}
          <button className="popup__button" type="submit" name="submit">
            {buttonSave || "Сохранить"}
          </button>
        </form>
        <button className="popup__close" type="button" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
