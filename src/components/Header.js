import PropTypes from 'prop-types'
import Button from "./Button.js";

const Header = ({title, showAdd, onAdd}) => {
    return(
        <header>

            <h1>{title}</h1>
                <Button text={showAdd ? 'Fermer' : 'Ajouter'} color={showAdd ? '#d9381e' : 'cornflowerblue'} onClick={onAdd}/>

        </header>
    )
}

Header.defaultProps = { // Valeur par defaut
    title: 'Panier de Produit'
}

Header.propTypes = {
    title: PropTypes.string.isRequired // une verification implicite qui s'assure que 'title' est un string, sinon, warning dans console.
}
export default Header