import React, {useState} from 'react'
import './Invitation.sass'
import InvitationIMG from '../../../../public/images/invitation.jpg'
import Modal from '../../ui/Modal/Modal';
import RegisterForm from '../../Forms/RegisterForm/RegisterForm';

const Invitation = () =>{
    
    const [openModal, setOpenModal] = useState(false);

    return( 
        <div className='Invitation'>
            <div className='Invitation-background'>
                <img src={InvitationIMG} alt="Invitation background"></img>
            </div>
            <div className='Invitation-info'>
                <h1>Dołącz do naszej społeczności!</h1>
                <button onClick={() => setOpenModal(true)}>Dołącz!</button>
            </div>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <RegisterForm />
            </Modal>
        </div>
    );
}

export default Invitation;