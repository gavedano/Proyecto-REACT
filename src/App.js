import NavBarBootstrap from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBarBootstrap />
      <ItemListContainer greeting={"Bienvenidos a la Tienda Virtual"} />
    </div>
  );
}

export default App;
