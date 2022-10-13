import './BestPhotos.sass';
import PhotoCard from '../../ui/PhotoCard/PhotoCard';
import zdjecie from '../../../../public/images/background.png';

const BestPhotos = () => {

    const img ={
        url: zdjecie,
        title: 'xd',
        nick: 'twoj stary',
        avg_rate: 5,
        comment_count: 20,
        date: '20/01/1999'
    }

    return (
        <div className='BestPhotos'>
            <p className='BestPhotos-title'>Najlepsze fotografie</p>
            <div className='BestPhotos-photos'>
                {Array(3).fill('').map((el, index) => {
                    return <PhotoCard key={index} img={img}/>
                })}
            </div>
        </div>
    )
}

export default BestPhotos;