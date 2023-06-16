function Card({ card, onCardClick }) {
  return (
    <div className="element">
      <div className="element__item">
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={() => onCardClick({link: card.link, name: card.name})}
        />
        <div className="element__image-info">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-container">
            <button className="element__like" type="button" />
            <p className="element__like-counter" />
          </div>
          <button className="element__image-basket" type="button" />
        </div>
      </div>
    </div>
  );
}

export default Card;
