// libs
import { createPortal } from "react-dom";
// styles
import "./Backdrop.sass";

const Backdrop = (props) => {
    
    const HTMLnode = document.getElementById("portal-backdrop");

    if (HTMLnode === null) return <></>;
    else return createPortal(
        <div 
            className="Backdrop"
            onClick={() => props.onClick()}
        />,
        HTMLnode
    );
}

export default Backdrop;