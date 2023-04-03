import React from 'react';
import Movie from '../Movie/movie'
import RentedMovie from '../Movie/rented_movie'
import './catalog.css'




function catalog({movies,updateBudget}) {
    return (

        <div>
            <div>
                <input className='searchBar' placeholder='search for a movie' type='text'/>
            </div>
            <h2 className='catalogText' >Movies to watch</h2>
            <div className="category-list">
                {movies.filter(m => !m.isRented).map(movie => <Movie movie={movie} updateBudget = {updateBudget}/>)}
            </div>
            <br/>
            <h2 className='catalogText' >Rented movies</h2>
            <div className="category-list">
                {movies.filter(m => m.isRented).map(movie => <RentedMovie movie={movie} updateBudget = {updateBudget}/>)}
            </div>
        </div>
    );
}   


export default catalog  