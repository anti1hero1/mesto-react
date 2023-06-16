import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";
function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()]).then(([user, cards]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      cards.forEach((data) => (data.myid = user._id));
      setCards(cards);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <img className="profile__image" src={userAvatar} alt="Аватар" />
        <button
          className="profile__avatar-button"
          type="button"
          onClick={onEditAvatar}
        />
        <div className="profile__info">
          <h1 className="profile__info-title">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={onEditProfile}
          />
          <p className="profile__info-subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Карточки мест">
        {cards.map((data) => {
          return (
            <div className="element" key={data._id}>
              <Card card={data} onCardClick={onCardClick} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
