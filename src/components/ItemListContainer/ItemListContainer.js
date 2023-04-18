import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  // completar grilla
  return <ItemList products={products} />;
};
export default ItemListContainer;
