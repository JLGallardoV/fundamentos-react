import PropTypes from 'prop-types' //libreria que nos sirve para dar tipos de datos a los props de un componente dado   

export function Button({text, name = ''}){
    console.log(text);
    return <button>
        {text + name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}