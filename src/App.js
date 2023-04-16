import NavBarBootstrap from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBarBootstrap />
      <BrowserRouter>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route
            exact
            path="/Catalogo"
            element={
              <ItemListContainer greeting={"Bienvenidos al Catalogo Virtual"} />
            }
          />
          <Route exact path="/Detalles" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
