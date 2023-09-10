import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ItemDetail from "./components/ItemDetail/ItemDetail";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer/> }/>  
        <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> }/>  
        <Route path="/item/:idItem" element={ <ItemDetailContainer/> } />  
        <Route path="*" element={<h2>Error en acceso, vuelva a la página anterior</h2>}/>  
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

