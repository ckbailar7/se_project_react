import "../blocks/ItemCard.css";

const ItemCard = ({ data, onSelectCard }) => {
  return (
    <div className="card__items-imgContainer">
      <div>
        <img
          className="card__image"
          src={data.link}
          onClick={() => onSelectCard(data)}
        />
      </div>
      <div className="card__name">{data.name}</div>
    </div>
  );
};

export default ItemCard;
