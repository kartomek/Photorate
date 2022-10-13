import './PhotoCard.sass';

const PhotoCard = ({img}) => {
    return(
        <div className='PhotoCard'>
            <div className='PhotoCard-image'>
               <img src={img.url} alt = 'zdjęcie'></img>
            </div>
            <div className='PhotoCard-content'>
                <p className='PhotoCard-content-title'>{img.title}</p>
                <p className='PhotoCard-content-author'>{img.nick}</p>
                <div className='PhotoCard-content-statistics'>
                    <div>
                        <p className='PhotoCard-content-statistics-value'>{Number(img.avg_rate).toFixed(2)}</p>
                        <p className='PhotoCard-content-statistics-title'>Średnia ocen</p>
                    </div>
                    <div>
                        <p className='PhotoCard-content-statistics-value'>{img.comment_count}</p>
                        <p className='PhotoCard-content-statistics-title'>Ilość ocen</p>
                    </div>
                    <div>
                        <p className='PhotoCard-content-statistics-value'>{img.date.substr(0,10)}</p>
                        <p className='PhotoCard-content-statistics-title'>Data publikacji</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;