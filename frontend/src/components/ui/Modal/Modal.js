import React from 'react'
import {createPortal} from 'react-dom'
import './Modal.sass';

import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) =>{

        const HTMLnode = document.getElementById("portal-modal");

        if (HTMLnode === null || !props.open) return <></>;
        else return createPortal(
        <>
            {/* backdrop */}
            {props.open && (<Backdrop onClick={() => props.onClose()} />)}
            {/* modal */}
            <div className = 'Modal'>
                <div className='Modal-header'>
                    <p onClick={()=>props.onClose()}>X</p>
                </div>
                <div className='Modal-content'>
                    {props.children} 
                </div>   
             </div>
        </>, HTMLnode
        );
}

export default Modal;