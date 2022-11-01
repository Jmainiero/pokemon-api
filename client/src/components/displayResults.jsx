import { useSelector } from 'react-redux'
import { DisplayAbout } from './displayAbilities'
import { DisplayBreeding } from './displayBreeding'
export const DisplayResults = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon)
    return(
        <div className="display-content">
            <div className="display-content_header">
                <div className="display-content_types">
        {
                              pokemon.types.map((key,index) => {
                                  key = key.replaceAll('-', ' ').split(' ').map(i => {
                                            return i.charAt(0).toUpperCase() + i.substring(1)
                                        }).join(" ");
                                  return <span key={key}>{key}</span>;
                                })

                            }
                </div>
                <div className="display-content_pokeid">
                    <span>#{pokemon.id}</span>
                </div>
            <h1>{pokemon.about.name.charAt(0).toUpperCase() + pokemon.about.name.substring(1)}</h1>
            </div>
                <div className="display-content_body display-specifics">
                    <DisplayAbout/>
                    <DisplayBreeding/>
                </div>
        </div>
    )
}
