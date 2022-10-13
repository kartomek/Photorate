import './Spinner.sass';

const Spinner = (props) => {
    return(
        <svg 
        className="Spinner" 
        viewBox="0 0 50 50" 
        style={{width: props.size, height: props.size}}
        >
            <circle 
                className="path" 
                cx="25" 
                cy="25" 
                r="20" 
                fill="none" 
                strokeWidth={props.thickness} 
            />
        </svg>
    )
}

export default Spinner;