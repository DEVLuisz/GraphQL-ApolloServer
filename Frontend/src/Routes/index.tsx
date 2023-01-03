import { Route, Routes } from "react-router-dom"
import AreaLogada from "../Pages/AreaLogada"
import Categoria from "../Pages/Categoria"
import Home from "../Pages/Home"
import Livro from "../Pages/Livro"
import PaginaBase from "../Pages/PaginaBase"
import Pedidos from "../Pages/Pedidos"


const Rotas = () => {
  return (<Routes>
    <Route path='/' element={<PaginaBase />}>
      <Route path='/' element={<Home />} />
      <Route path='/minha-conta' element={<AreaLogada />}>
        <Route path="pedidos" element={<Pedidos />} />
      </Route>
      <Route path="/categorias/:slug" element={<Categoria />}/>
      <Route path="/livro/:slug" element={<Livro />} />
    </Route>
  </Routes>)
}

export default Rotas