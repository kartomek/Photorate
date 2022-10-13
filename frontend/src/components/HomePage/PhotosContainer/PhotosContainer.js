import PhotoCard from '../../ui/PhotoCard/PhotoCard';
import './PhotosContainer.sass';
import zdjecie from '../../../../public/images/background.png';

const PhotosContainer = () => {

    const img ={
        url: zdjecie,
        title: 'xd',
        nick: 'twoj stary',
        avg_rate: 5,
        comment_count: 20,
        date: '20/01/1999'
    }
    return (
        <div className="PhotosContainer">
            {Array(100).fill('').map((el, i) => <PhotoCard key={i} img={img}/>)}
        </div>
    )
}

export default PhotosContainer;