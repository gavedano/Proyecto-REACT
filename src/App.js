import NavBarBootstrap from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBarBootstrap />
      <ItemListContainer greeting={"Bienvenidos al Catalogo Virtual"} />
    </div>
  );
}

export default App;
