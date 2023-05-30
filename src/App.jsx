import {BrowserRouter, Routes, Route} from "react-router-dom";

import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import Produtos from "./pages/produtos";
import Login from "./pages/login";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/sobre" element={<Sobre/>}></Route>
          <Route path="/produtos" element={<Produtos/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App 