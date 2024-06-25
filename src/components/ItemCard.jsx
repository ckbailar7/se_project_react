import React, { useState } from "react";
import "../blocks/ItemCard.css";
//console.log("Hello from ItemCard.js ");

function ItemCard({ data, onSelectCard, onCardLike, currentUser }) {
  console.log("CURRENT USER DATA FROM ITEMCARD ==>", currentUser);
  console.log("CURRENT DATADATADATA FROM ITEMCARD ==>", data);

  const isLiked =
    currentUser && data.likes.some((id) => id === currentUser._id);

  const itemLikeButtonClassName = `card__name-button ${
    isLiked ? "card__name-button_filled" : "card__name-button_empty"
  }`;
  const handleLike = () => {
    onCardLike({ id: data._id, isLiked });
  };
  return (
    //Parent Class = <div className="card__items">
    <div className="card__items-imgContainer">
      <div>
        <img
          className="card__image"
          alt={data.name}
          src={data.imageUrl}
          onClick={() => onSelectCard(data)}
        />
      </div>
      <div className="card__name">
        {data.name}
        <button
          className={itemLikeButtonClassName}
          onClick={handleLike}
        ></button>
      </div>
    </div>
  );
}

export default ItemCard;
