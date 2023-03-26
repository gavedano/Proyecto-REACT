import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav>
      <h3>Ecommerce</h3>
      <div>
        <button>CELULARES</button>
        <button>PC</button>
        <button>HOLA</button>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;