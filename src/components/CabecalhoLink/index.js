import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

//{children} Renderiza o conteúdo do componente CabecalhoLink
function CabecalhoLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;