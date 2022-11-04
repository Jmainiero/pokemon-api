import { useSelector } from 'react-redux'
import { DisplayGender} from './DisplayGender'
export const DisplayBreeding = () => {
    const pokemon = useSelector(state => state.pokemon.pokemon)
     return (
        <div className="display-specifics__breeding">
                  <span className="display-specifics_category--secondary">Breeding</span>
                    {<DisplayGender props={{pokemon}}/>}
                    <div>
                        <span className="table-key">Egg Groups</span>
                        <div className="table-data">
                                {
                                    pokemon.eggGroups.map((key,index) => {
                                        key = key.replaceAll('-', ' ').split(' ').map(i => {
                                            return i.charAt(0).toUpperCase() + i.substring(1)
                                        }).join(" ");
                                    if(index !== pokemon.eggGroups.length -1) key += ', ';
                                    return key;
                                    })
                                }

                        </div>
                    </div>
        </div>

    )

 }
