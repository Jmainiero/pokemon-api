import { useSelector } from 'react-redux'
export const DisplayAbout = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon)
    return (
        <div className="display-specifics__about">
                    {
                        Object.keys(pokemon.about).map((key, index) => {
                            return(
                                 <div className="flex-content" key={key}>
                                     <span className="table-key">{key.charAt(0).toUpperCase() + key.substring(1)}</span>
                                      <span className="table-data">{(key === 'name') ? pokemon.about[key].charAt(0).toUpperCase() + pokemon.about[key].substring(1): pokemon.about[key]}</span>
                                  </div>
                                )
                            })
                         }
                    <div className="flex-content">
                        <span className="table-key">Abilities</span>
                            <span className="table-data">
                                {
                                    pokemon.abilities.map((key,index) => {
                                        key = key.replaceAll('-', ' ').split(' ').map(i => {
                                            return i.charAt(0).toUpperCase() + i.substring(1)
                                        }).join(" ");
                                    if(index !== pokemon.abilities.length -1) key += ', ';
                                    return key;
                                    })
                                }
                            </span>
                        </div>
        </div>

    )

}
