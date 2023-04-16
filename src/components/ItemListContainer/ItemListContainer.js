import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  return (
    <Container fluid="md">
      <h1>{greeting}</h1>
      <Row>
        <Col>
          <ItemList products={products} />
        </Col>
      </Row>
    </Container>
  );
};
export default ItemListContainer;
