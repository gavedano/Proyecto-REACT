// A MODO DE EJEMPLO HOME CON LINKS

import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1> Tienda virtual de Hyperlink Soluciones</h1>

    <ul>
      <li>
        <Link to="/Catalogo">Catalogo</Link>
      </li>
      <li>
        <Link to="/Detalles"> Detalles</Link>
      </li>
    </ul>
  </div>
);
export default Home;
