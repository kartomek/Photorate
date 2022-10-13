import './LoginForm.sass';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { useAuth } from '../../../providers/AuthProvider';
import { useState, useEffect, useRef } from 'react';
import Spinner from '../../ui/Spinner/Spinner';

const LoginForm = () => {

    const {login, error, loading} = useAuth();
    const [nick, setNick] = useState("");
    const [passwd, setPasswd] = useState("");

    const loginHandle = (e) =>{
        if (e.code === 'Enter') login(nick, passwd);
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


    return(
        <div className="LoginForm">
            <p className='LoginForm-title'>Logowanie</p>
            {loading ? (
                <div className='LoginForm-loading'>
                    <Spinner size={150} thickness={2}/>
                </div>
            ):(
                <>
                    <div className='LoginForm-inputs'>
                        <Input 
                            title="Login"
                            type="text"
                            info=""
                            value={nick}
                            onChange={setNick}
                        />
                        <Input 
                            title="Hasło"
                            type="password"
                            info=""
                            value={passwd}
                            onChange={setPasswd}
                        />
                    </div>
                    <p className='LoginForm-error'>{error}</p>
                    <div className='LoginForm-button'>
                        <Button onClick={()=>login(nick, passwd)}>Zaloguj</Button>
                    </div>
                </>
            )}
            
        </div>
    )
}

export default LoginForm