import React from 'react';

import './Header.sass'
import headerIMG from '../../../../public/images/background.png'

const Header = () =>(
    <div className='Header'>
        <div className='HeaderContainer'>
            <h1>Photorate</h1>
            <h3>Najlepszy sposób by pochwalić się swoimi zdjęciami!</h3>
        </div>
        <img src={headerIMG} />  
    </div>
);

export default Header;
