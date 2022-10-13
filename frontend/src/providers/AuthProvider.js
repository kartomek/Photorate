import {useState, createContext, useEffect, useContext} from 'react';
import { useErrors } from '../hooks/useErrors';
import request from '../helpers/axiosConfig';

const AuthContext = createContext(null);

const AuthProvider = props =>{
    const [isAuth, setIsAuth] = useState(false);
    const [error, setError] = useState(false);
    const [justLogged, setJustLogged] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tokenPayload, setTokenPayload] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("photorate_access_token") || "");
    const { parseResponseError } = useErrors();
    const [autoLoading, setAutoLoading] = useState(false);
    
    const login = async(login, passwd) => {
        try{
            setLoading(true)
            const {data} = await request.post("/session/login", {login, passwd})
            setJustLogged(true);
            setIsAuth(true);
            //setTokenPayload(data.tokenPayload)
            setToken(data.token);
            localStorage.setItem("photorate_access_token", data.token);
            setLoading(false);
        }
        catch(err){
            setLoading(false);
            setError(parseResponseError(err))
        }
    }

    const register = async(email, login, passwd, repeatPasswd) => {
        try{
            setLoading(true)
            const {data} = await request.post("/register", {email, login, passwd, repeatPasswd})
            setJustLogged(true);
            setIsAuth(true);
            //setTokenPayload(data.tokenPayload)
            setToken(data.token);
            localStorage.setItem("photorate_access_token", data.token);
            setLoading(false);
        }
        catch(err){
            setLoading(false);
            setError(parseResponseError(err))
        }
    }

    const logout = () =>{
        setIsAuth(false);
        setToken("");
        localStorage.removeItem("photorate_access_token");
    }

    useEffect(() => {
        if (token.length > 0) {
            if (justLogged) {
                setJustLogged(false);
                return;
            }
            setAutoLoading(true);
            request.get("/session/check_token", {headers: {authorization: `Bearer ${token}`}})
            .then(data => {
                console.log(data)
            })
            .catch(() =>{
                logout();
                setAutoLoading(false);
            })
            //setTokenPayload(data.tokenPayload);
            setIsAuth(true);
            setAutoLoading(false);
        }

    }, [token]);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                login,
                token,
                tokenPayload,
                error,
                setError,
                loading,
                autoLoading,
                logout,
                register
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth hook must be used within AuthProvider");
    else return context;
}

export {
    AuthProvider,
    useAuth
}