import NavBarBootstrap from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBarBootstrap />
      <ItemListContainer greeting={"Bienvenidos a la Tienda Virtual"} />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
      />
    </div>
  );
}

export default App;
