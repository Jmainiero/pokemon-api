import { useSelector } from 'react-redux'
export const SearchResults = () => {
    const selector = useSelector(state => state.pokemon.pokemon);
    console.log(selector)
    window.document.title = "Search Results | John Mainiero"
    return(
        <div className="container">
            <h1>Search Results</h1>
        </div>
    );
}
