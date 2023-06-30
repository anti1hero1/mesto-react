import React from "react";
import api from "../utils/api";

function ButtonLike({ likes, myId, cardId }) {
  const [isLike, setLike] = React.useState(false);
  const [isCount, setCount] = React.useState(likes.length);

  React.useEffect(() => {
    setLike(likes.some((element) => myId === element._id));
  }, [likes, myId]);

  function handleLike() {
    if (isLike) {
      api
        .deleteCardLike(cardId)
        .then((res) => {
          setLike(false);
          setCount(res.likes.length);
        })
        .catch((err) => console.log(err));
    } else {
      api
        .getCardLike(cardId)
        .then((res) => {
          setLike(true);
          setCount(res.likes.length);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <button
        className={`element__like ${isLike ? `element__like_active` : ""}`}
        type="button"
        onClick={handleLike}
      />
      <p className="element__like-counter">{isCount}</p>
    </>
  );
}

export default ButtonLike;
