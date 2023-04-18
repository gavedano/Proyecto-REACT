// MUESTRA LOS PRODUCTOS EN INICIO

import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProducts] = useState(null);
  useEffect(() => {
    getProductById("")
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  });

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailContainer;
