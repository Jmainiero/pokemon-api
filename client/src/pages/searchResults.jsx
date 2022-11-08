import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { DisplayResults } from '../components/pages/searchResults/displayResults'
export const SearchResults = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon);
    console.log(pokemon)
    useEffect(() => {
     if(pokemon.length === 0) window.location = "/";
    }, [])
    window.document.title = "Search Results | John Mainiero"
    return(
        <div className="container">
        {pokemon.length != 0 ? <DisplayResults/> : null}
        </div>
    );
}
