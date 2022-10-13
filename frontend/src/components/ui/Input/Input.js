import './Input.sass'

const Input = (props) => {

    let InputClass = "Input-field"

    if(props.info.length > 0){
        InputClass += " Input-field-error"
    }else {InputClass = "Input-field"}
    return(
        <div className="Input">
            <p className="Input-title">{props.title}</p>
            <input
                type={props.type}
                className={InputClass}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
            />
            {props.info.length > 0 && 
                <p className="Input-info">
                    {props.info}
                </p>
            }
        </div>
    ) 
}

export default Input