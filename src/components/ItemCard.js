import "../blocks/ItemCard.css";

const ItemCard = ({ data, onSelectCard }) => {
  return (
    //Parent Class = <div className="card__items">
    <div className="card__items-imgContainer">
      <div>
        <img
          className="card__image"
          alt={data.name}
          src={data.link}
          onClick={() => onSelectCard(data)}
        />
      </div>
      <div className="card__name">{data.name}</div>
    </div>
  );
};

export default ItemCard;