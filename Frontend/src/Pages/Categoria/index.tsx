import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import ListaLivros from "../../Components/ListaLivros"
import Loader from "../../Components/Loader"
import TituloPrincipal from "../../Components/TituloPrincipal"
import { obterCategoriaPorSlug } from "../../http"

const Categoria = () => {

    const params = useParams()
    const { data: categoria, isLoading } = useQuery(['categoriaPorSlug', params.slug], () => obterCategoriaPorSlug(params.slug || ''))

    if (isLoading) {
        return <Loader />
    }

    return (<section>
        <TituloPrincipal texto={categoria?.nome ?? ''} />
        <ListaLivros categoria={categoria!} />
    </section>)
}

export default Categoria