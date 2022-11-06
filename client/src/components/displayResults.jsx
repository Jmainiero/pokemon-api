import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DisplayAbout } from './displayAbilities'
import { DisplayBreeding } from './displayBreeding'
import { typingColors } from '../css/typingColors'
const pokemonBackground = require('../assets/pokemon-background.png')
console.log(pokemonBackground)
export const DisplayResults = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon)
    console.log(typingColors[pokemon.types[0]])
    const containerStyles = {
        background: `url('${pokemonBackground}')`
    }
    console.log(containerStyles)
    return(
        <div className="display-content">
            <div className="display-content_header" style={{ backgroundImage: `${containerStyles.background}` }}>
                <div className="display-content_types">
        {
                              pokemon.types.map((key,index) => {
                                  key = key.replaceAll('-', ' ').split(' ').map(i => {
                                            return i.charAt(0).toUpperCase() + i.substring(1)
                                        }).join(" ");
                                  return <span key={key} style={{ background: `#${typingColors[pokemon.types[index]]}`, boxShadow: `6px 6px rgb(53 53 53)`}}>{key}</span>;
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
