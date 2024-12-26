import "./item.css";
import { useCartContext } from "../../context";

const Item = ({ id, title, price, img, quantity }) => {
  const { remove, changeQuantity } = useCartContext();
  return (
    <div className="item-wrapper">
      <div className="item-info">
        <img src={img} alt={title} />
        <div>
          <h5 className="title">{title}</h5>
          <span className="price">{price.toLocaleString()}</span>
        </div>
      </div>

      <div className="item-action">
        <label htmlFor={`quantity-${id}`}>تعداد: </label>
        <input
          id={`quantity-${id}`}
          type="number"
          value={quantity}
          onChange={(event) => changeQuantity(id, +event.target.value)}
        />
        <button onClick={() => remove(id)}>حذف</button>
      </div>
    </div>
  );
};

export default Item;
