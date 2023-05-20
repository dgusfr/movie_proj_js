import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import styles from './Inicio.module.css';

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return (
        <>
            {/* Renderiza Banner e passa uma propriedade 'imagem' com o valor "home" */}
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para encontrar os melhores filmes</h1>
            </Titulo>
            <section className={styles.container}>
                {/* Mapeia cada item do array e retorna o video referente ao 'id' de cada 'card'*/}
                {/*Com '...video' propriedades do video serão passadas para o componente 'Card', evitando a necessidade de escrever cada propriedade individualmente */}
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;