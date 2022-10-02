import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import Nav from '../src/containers/Nav/Nav'

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<MainPage/>} />
            </Routes>
        </BrowserRouter>
    );
} 


export default App;