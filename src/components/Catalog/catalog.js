import React ,{useState} from 'react';
import CatalogBody from './catalog_body'
import './catalog.css'




function Catalog({movies,updateBudget}) {
    const [searchValue, setSearchValue] = useState('');
    function updateSearchValue(event) {
        setSearchValue(event.target.value)
    }
    let searchResult = movies.filter(m => m.title.toLowerCase().includes(searchValue) || m.title.includes(searchValue))
    
    return (
        <div>
            <div>
                <input value={searchValue} onChange={updateSearchValue} className='searchBar' placeholder='search for a movie' type='text'/>
            </div>
            {searchValue == "" ? <CatalogBody movies = {movies} updateBudget = {updateBudget}/> : <CatalogBody movies = {searchResult} updateBudget = {updateBudget}/>}
            
        </div>
    );
}   


export default Catalog  