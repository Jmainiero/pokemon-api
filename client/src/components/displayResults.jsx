import { useSelector } from 'react-redux'
export const DisplayResults = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon)
    console.log('Loaded DisplayResults')
    return(
        <div className="display-content">
            <div className="display-content_header">
                <div className="display-content_types">
        {
                              pokemon.types.map((key,index) => {
                                  key = key.replaceAll('-', ' ').split(' ').map(i => {
                                            return i.charAt(0).toUpperCase() + i.substring(1)
                                        }).join(" ");
                                  return <span>{key}</span>;
                                })

                            }
                </div>
                <div className="display-content_pokeid">
                    <span>#{pokemon.about.id}</span>
                </div>
            <h1>{pokemon.about.name.charAt(0).toUpperCase() + pokemon.about.name.substring(1)}</h1>
            </div>
                <div className="display-content_body display-specifics">
                    <table>
                        <tbody>
                          <tr><td className="display-specifics_category">About</td></tr>
                              {
                             Object.keys(pokemon.about).map((key, index) => {
                                  return(
                                     <tr key={key}>
                                         <td className="table-key">{key.charAt(0).toUpperCase() + key.substring(1)}</td>
                                          <td className="table-data">{(key === 'name') ? pokemon.about[key].charAt(0).toUpperCase() + pokemon.about[key].substring(1): pokemon.about[key]}</td>
                                      </tr>
                                    )
                                })
                             }
                                <tr>
                                    <td className="table-key">Abilities</td>
                                        <td className="table-data">

                            {
                              pokemon.abilities.map((key,index) => {
                                  key = key.replaceAll('-', ' ').split(' ').map(i => {
                                            return i.charAt(0).toUpperCase() + i.substring(1)
                                        }).join(" ");
                                  if(index !== pokemon.abilities.length -1) key += ', ';
                                  return key;
                                })

                            }
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    )
}
