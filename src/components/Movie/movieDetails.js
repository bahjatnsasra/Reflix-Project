import React from 'react';
import { useParams } from 'react-router-dom';
import './movieDetails.css';



function MovieDetails({movies}) {
    let { movieId } = useParams();
    let movie = movies.find(movie => movie.id == movieId)
    console.log(movie);
    return (
        <div className='desc-card'>
            <h2 className='details'>{`${movie.title} (${movie.year})`}</h2>
            <div className="card category-card" style={{ backgroundImage: `url(${movie.img})` }}></div>
            <h2 className='details'>{movie.descrShort}</h2>
        </div>
    )
} 

export default MovieDetails