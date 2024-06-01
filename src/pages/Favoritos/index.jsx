import Banner from "components/Banner/Banner";
import Card from "components/Card/Card";
import Titulo from "components/Titulo/Titulo";
import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Favoritos.module.css";

//Este código define o componente Favoritos, que exibe os favoritos do usuário.
//Ele importa vários componentes, como Banner, Card e Titulo, e utiliza o contexto Favoritos para acessar o estado de favoritos.
//Os favoritos são renderizados em um layout específico usando o componente Card.

function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
