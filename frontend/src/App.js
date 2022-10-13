import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import Nav from '../src/containers/Nav/Nav'
import HomePage from './containers/HomePage/HomePage';
import { useAuth } from './providers/AuthProvider';

const App = () =>{
    const {autoLoading, isAuth} = useAuth();

    return(
        autoLoading ? (
            <div>Ładowanie</div>
        ) : (
            <BrowserRouter>
                <Nav />
                <Routes> 
                    <Route path="/" exact element={isAuth ? <HomePage /> : <MainPage/>} />
                </Routes>
            </BrowserRouter>
    ));
} 


export default App;