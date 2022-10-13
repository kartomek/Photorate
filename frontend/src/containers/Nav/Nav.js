import Logo from '../../../public/images/logo.png'
import './Nav.sass';
import Modal from '../../components/ui/Modal/Modal';
import { useState, useEffect } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import IconLogout from '../../../public/svg/logoutIcon.svg';
import IconSettings from '../../../public/svg/settingsIcon.svg';
import IconHome from '../../../public/svg/homeIcon.svg';
import { useNavigate } from 'react-router-dom';

const Nav = () =>{
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [registerModalOpen, setRegisterModalOpen] = useState(false)
    const {isAuth, logout, setError} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setLoginModalOpen(false);
        setRegisterModalOpen(false);
    }, [isAuth])

    useEffect(() => {
        setError("");
    }, [loginModalOpen])



    const navType = (
        isAuth ? (
            <div className='Nav-icons'>
                <IconHome />
                <IconSettings />
                <IconLogout onClick={() => {logout(); navigate('/');}}/>
            </div>
        ) : (
            <div className='Nav-buttons'>
                <p 
                    className='Nav-buttons-login'
                    onClick={()=>setLoginModalOpen(true)}
                >
                    Zaloguj
                </p>
                <p 
                    className='Nav-buttons-register'
                    onClick={()=>setRegisterModalOpen(true)}
                >
                    Zarejestruj
                </p>
            </div>
        )
    )

    return(
        <>
            <div className="Nav">
                <div className='Nav-logo'>
                    <img src={Logo} />
                </div> 
                {navType}
            </div>
            <Modal 
                open={loginModalOpen}
                onClose={()=>setLoginModalOpen(false)}
            >
                <LoginForm />
            </Modal>
            <Modal 
                open={registerModalOpen}
                onClose={()=>setRegisterModalOpen(false)}
            >
                <RegisterForm />
            </Modal>
       </>
    )
}

export default Nav;