import Banner from "../../components/Banner/Banner";
import Titulo from "../../components/Titulo/Titulo";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import NaoEncontrada from "../NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Trailer</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;

//Este código define o componente Player, que exibe um vídeo em um player.
//Ele importa os componentes Banner, Titulo e NaoEncontrada, bem como o hook useParams e as funções useEffect e useState do React.
//O componente faz uma requisição para obter os dados de um vídeo específico usando o ID fornecido nos parâmetros da URL. Se o vídeo não for encontrado, o componente NaoEncontrada é renderizado.
//Caso contrário, o vídeo é exibido no player dentro do elemento <iframe>.
