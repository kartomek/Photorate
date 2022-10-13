import './Button.sass';

const Button = (props) => {
    return (
        <div className="Button">
            <button onClick={() => props.onClick()} disabled={props.disabled}>
                {props.children}
            </button>
        </div>
    );
}

export default Button;