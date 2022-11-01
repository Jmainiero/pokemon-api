import { useSelector } from 'react-redux'
import { DisplayGender} from './DisplayGender'
export const DisplayBreeding = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon)
     return (
        <table>
            <tbody>
                  <tr><td className="display-specifics_category--secondary">Breeding</td></tr>
                    <tr>
                        <td className="table-key">Gender</td>
                        <td className="table-data">{<DisplayGender props={{pokemon}}/>}</td>
                    </tr>
                    <tr>
                        <td className="table-key">Egg Groups</td>
                        <td className="table-data">
                                {
                                    pokemon.eggGroups.map((key,index) => {
                                        key = key.replaceAll('-', ' ').split(' ').map(i => {
                                            return i.charAt(0).toUpperCase() + i.substring(1)
                                        }).join(" ");
                                    if(index !== pokemon.eggGroups.length -1) key += ', ';
                                    return key;
                                    })
                                }

                        </td>
                    </tr>
            </tbody>
        </table>

    )

 }
