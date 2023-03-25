import "../blocks/ItemCard.css";

const ItemCard = ({ data }) => {
  return (
    <div>
      <div>
        <img className="card__image" src={data.link} />
      </div>
      <div className="card__name">{data.name}</div>
    </div>
  );
};

export default ItemCard;
