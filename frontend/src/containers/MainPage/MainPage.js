import React from 'react'
import BestPhotos from '../../components/MainPage/BestPhotos/BestPhotos';

import Header from '../../components/MainPage/Header/Header';
import Invitation from '../../components/MainPage/Invitation/Invitation';
import NewestPhotos from '../../components/MainPage/NewestPhotos/NewestPhotos';

const MainPage = () =>(
    <div className='mainPage'>
        <Header/>
        <NewestPhotos />
        <BestPhotos />
        <Invitation />
    </div>
);

export default MainPage;