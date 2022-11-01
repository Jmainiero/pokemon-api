import { useSelector } from 'react-redux'
export const DisplayAbout = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon)
    return (
        <table>
            <tbody>
                  <tr><td className="display-specifics_category--primary">About</td></tr>
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

    )

}
