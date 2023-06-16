import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isImagePopup, setImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopup(true);
  }

  function closeAllPopups() {
    setAvatarPopupOpen(false);
    setProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setImagePopup(false);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          id="input-name"
          name="name"
          type="text"
          placeholder="Имя"
          className="popup__input popup__input_type_name"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="popup__error input-name-error" />
        <input
          id="input-about"
          name="about"
          type="text"
          placeholder="О себе"
          className="popup__input popup__input_type_about"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__error input-about-error" />
      </PopupWithForm>

      <PopupWithForm
        name="places"
        title="Новое место"
        buttonSave="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          id="input-place"
          type="text"
          placeholder="Название"
          name="place"
          className="popup__input popup__input_type_place"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="popup__error input-place-error" />
        <input
          id="input-src"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          className="popup__input popup__input_type_src"
          required=""
        />
        <span className="popup__error input-src-error" />
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить автар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          id="input-avatar"
          type="url"
          placeholder="Ссылка на картинку"
          name="avatar"
          className="popup__input popup__input_type_avatar"
          required=""
        />
        <span className="popup__error input-avatar-error" />
      </PopupWithForm>

      {/* <PopupWithForm name="delete" title="Вы уверены?" buttonSave="Да">
        <input
          id="input-avatar"
          type="url"
          placeholder="Ссылка на картинку"
          name="avatar"
          className="popup__input popup__input_type_avatar"
          required=""
        />
        <span className="popup__error input-avatar-error" />
      </PopupWithForm> */}

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopup}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
