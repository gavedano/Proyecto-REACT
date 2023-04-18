//CREA LA TARJETA DEL ITEM
import "./Item.css";
import ItemDetail from "../ItemDetail/ItemDetail";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="ItemsInicio">
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{name}</h2>
        </header>
        <picture>
          <img src={img} alt={name} className="itemImg" />
        </picture>
        <section>
          <p className="Info">Precio: ${price}</p>
          <p className="Info">Stock disponible: {stock}</p>
        </section>
        <footer className="ItemFooter">
          <button className="Option" onClick={<ItemDetail />}>
            Ver detalle
          </button>
        </footer>
      </article>
    </div>
  );
};
export default Item;
