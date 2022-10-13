import './RegisterForm.sass';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { useState, useEffect, useRef } from 'react';
import { isConfirmationValid, isEmailValid, isLoginValid, isPasswordValid } from "./functions";
import { useAuth } from '../../../providers/AuthProvider';
import Spinner from '../../ui/Spinner/Spinner';

const RegisterForm = () => {

    const {register, error, loading} = useAuth();

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [passwdRepeat, setPasswdRepeat] = useState("");

    const [invalidEmail, setInvalidEmail] = useState("");
    const [invalidLogin, setInvalidLogin] = useState("");
    const [invalidPassword, setInvalidPassword] = useState("");
    const [invalidConfirmation, setInvalidConfirmation] = useState("");

    const loginHandle = (e) =>{
        if (e.code === 'Enter') sendRegister();
    }

    const cbRef = useRef(loginHandle);

    useEffect(() => {
        cbRef.current = loginHandle;
    });

    useEffect(() => {
        const cb = e => cbRef.current(e);
        window.addEventListener("keydown", cb);
        return () => window.removeEventListener("keydown", cb);
    }, []);

    const sendRegister = () => {
        setInvalidLogin("");
        setInvalidEmail("");
        setInvalidPassword("");
        setInvalidConfirmation("");
        let errorOccurred = false;

        if (!isLoginValid(login)) {
            errorOccurred = true;
            setInvalidLogin("Login musi mieć od 5 do 25 znaków (litery, cyfry, znak podłogi).");
        }
        if (!isEmailValid(email)) {
            errorOccurred = true;
            setInvalidEmail("Email ma niepoprawny format.");
        }
        if (!isPasswordValid(passwd)) {
            errorOccurred = true;
            setInvalidPassword("Hasło musi zawierać minimum 8 znaków w tym 1 cyfrę oraz 1 wielką literę.");
        }
        if (!isConfirmationValid(passwdRepeat, passwd)) {
            errorOccurred = true;
            setInvalidConfirmation("Potwierdzenie hasła jest różne od oryginału.");
        }
        if (!errorOccurred) register(email, login, passwd, passwdRepeat);
    }

    return(
        <div className="RegisterForm">
            <p className='RegisterForm-title'>Rejestracja</p>
            {loading ? (
                <div className='RegisterForm-loading'>
                    <Spinner size={150} thickness={2}/>
                </div>
            ):(
                <>
                    <div className='RegisterForm-inputs'>
                        <Input 
                            title="Email"
                            type="text"
                            value={email}
                            onChange={setEmail}
                            info={invalidEmail}
                        />
                        <Input 
                            title="Login"
                            type="text"
                            info={invalidLogin}
                            value={login}
                            onChange={setLogin}
                        />
                        <Input 
                            title="Hasło"
                            type="password"
                            info={invalidPassword}
                            value={passwd}
                            onChange={setPasswd}
                        />
                        <Input 
                            title="Powtórz hasło"
                            type="password"
                            info={invalidConfirmation}
                            value={passwdRepeat}
                            onChange={setPasswdRepeat}
                        />
                    </div>
                    <p className='RegisterForm-error'>{error}</p>
                    <div className='RegisterForm-button'>
                        <Button
                            onClick={sendRegister}
                        >
                            Zarejestruj
                        </Button>
                    </div>
                </>
            )}
            
        </div>
    )
}

export default RegisterForm