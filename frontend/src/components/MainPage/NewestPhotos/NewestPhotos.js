import './NewestPhotos.sass';
import PhotoCard from '../../ui/PhotoCard/PhotoCard';
import zdjecie from '../../../../public/images/background.png';

const NewestPhotos = () => {

    const img ={
        url: zdjecie,
        title: 'xd',
        nick: 'twoj stary',
        avg_rate: 5,
        comment_count: 20,
        date: '20/01/1999'
    }

    return (
        <div className='NewestPhotos'>
            <p className='NewestPhotos-title'>Najnowsze fotografie</p>
            <div className='NewestPhotos-photos'>
                {Array(3).fill('').map((el, index) => {
                    return <PhotoCard key={index} img={img}/>
                })}
            </div>
        </div>
    )
}

export default NewestPhotos;