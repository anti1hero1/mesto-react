import React from "react";

function ButtonLike({ card, myId, onCardLike }) {
  const [isLike, setLike] = React.useState(false);

  React.useEffect(() => {
    setLike(card.likes.some((element) => myId === element._id));
  }, [card, myId]);

  return (
    <>
      <button
        className={`element__like ${isLike ? `element__like_active` : ""}`}
        type="button"
        onClick={()=>onCardLike(card)}
      />
      <p className="element__like-counter">{card.likes.length}</p>
    </>
  );
}

export default ButtonLike;
