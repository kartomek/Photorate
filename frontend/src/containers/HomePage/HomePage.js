import './HomePage.sass';
import { useState } from 'react';
import PhotosContainer from '../../components/HomePage/PhotosContainer/PhotosContainer';
import Spinner from '../../components/ui/Spinner/Spinner';

const HomePage = () =>{
    const [filter, setFilter] = useState("newest")
    return (
        <div className='HomePage'>
            <Spinner size={50} thickness={5}/>
            <div className='HomePage-nav'>
                <p 
                    className={filter === 'newest' ? 'HomePage-nav-active': ''}
                    onClick={() => setFilter("newest")}
                >
                    Najnowsze
                </p>
                <p 
                    className={filter === 'best' ? 'HomePage-nav-active': ''}
                    onClick={() => setFilter("best")}
                >
                    Najlepsze
                </p>
                <p 
                    className={filter === 'popular' ? 'HomePage-nav-active': ''}
                    onClick={() => setFilter("popular")}
                >
                    Najpopularniejsze
                </p>
            </div>
            <PhotosContainer />
        </div>
    )
}

export default HomePage;