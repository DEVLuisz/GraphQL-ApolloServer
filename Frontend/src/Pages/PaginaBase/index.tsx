import { Outlet } from "react-router-dom"
import BarraNavegacao from "../../Components/BarraNavegacao"
import Rodape from "../../Components/Rodape"

const PaginaBase = () => {
    return (<main>
        <BarraNavegacao />
        <Outlet />
        <Rodape />
    </main>)
}

export default PaginaBase