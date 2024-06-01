//createContext: Essa função é usada para criar um contexto no React.
//useContext: Esse hook permite que um componente acesse o valor de um contexto.
//useState: Esse hook é usado para criar um estado no componente.
import { createContext, useContext, useState } from "react";

//criação do contexto "favoritosContext" e atribuição de "Favoritos" a display
export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    {/* useState([]) cria estado favorito com valor inicial vazio, setFavorito permite atualizar esse estado */}
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}

//Este código cria um contexto chamado FavoritosContext e um provedor de contexto chamado FavoritosProvider que armazena e permite atualizar o estado de favoritos. 
//O hook useFavoritoContext é fornecido para que os componentes consumam o contexto e tenham acesso ao estado de favoritos e à função adicionarFavorito para adicionar ou remover favoritos.