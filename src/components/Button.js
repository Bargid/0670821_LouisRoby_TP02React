import PropTypes from "prop-types"

const Button = ({text, color, onClick}) => {

    return(
        <button onClick={onClick} style={{backgroundColor: color}} className="button-add">
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: "grey"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button