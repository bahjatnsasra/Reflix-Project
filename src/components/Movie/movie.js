import React from 'react';
import { Link } from 'react-router-dom';
import './movie.css'



function movie({movie,updateBudget}) {
    
    const rentMovie = () => {
        updateBudget(3,movie)
    }
    return (
        <div>
            <button className='add_button' onClick={rentMovie}> + </button>

            <Link to={`/movies/${movie.id}`}>
                <div  className="card category-card" style={{ backgroundImage: `url(${movie.img})` }}></div>
            </Link>
        </div>
    )
} 

export default movie