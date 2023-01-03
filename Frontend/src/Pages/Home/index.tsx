import { AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import './Home.css'
import { obterLivrosDestaque } from "../../http"
import Banner from "../../Components/Banner"
import Titulo from "../../Components/Titulo"
import LivrosDestaque from "../../Components/LivrosDestaque"
import TagsCategorias from "../../Components/TagsCategorias"
import Newsletter from "../../Components/Newsletter"

const Home = () => {
    const [busca, setBusca] = useState("")

    const { data: lancamentos } = useQuery(['destaques'], () => obterLivrosDestaque('lancamentos'))
    const { data: maisVendidos } = useQuery(['maisVendidos'], () => obterLivrosDestaque('mais-vendidos'))
    return (<section className="home">
        <Banner subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!" titulo="Já sabe por onde começar?">
            <form className="buscar">
                <AbCampoTexto 
                    placeholder="Qual será sua próxima leitura?"
                    value={busca}
                    onChange={setBusca}
                    darkmode={true}
                    placeholderAlign="center"
                />
            </form>
        </Banner>
        <Titulo texto="ÚLTIMOS LANÇAMENTOS"/>
        <LivrosDestaque livros={lancamentos ?? []}/>
        <Titulo texto="MAIS VENDIDOS"/>
        <LivrosDestaque livros={maisVendidos ?? []}/>
        <TagsCategorias />
        <Newsletter />
    </section>)
}

export default Home