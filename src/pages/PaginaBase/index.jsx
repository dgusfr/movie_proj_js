import Cabecalho from "components/Cabecalho/Cabecalho";
import Container from "components/Container/Container";
import Rodape from "components/Rodape/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
