import { Link } from 'react-router-dom'

const Entete = () => {
    return(

        <div class="header-menu">
            <Link to = '/'>Page d'Accueil</Link>
            <Link to = '/products'>Voir les produits</Link>
        </div>
    )}

export default Entete