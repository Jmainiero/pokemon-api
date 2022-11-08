import { useState } from 'react'

import { useSelector } from 'react-redux'
import { AboutPokemon} from './aboutPokemon'
import { typingColors } from '../../../css/typingColors'

export const DisplayResults = () => {
    const tabs = [
        {
            id: 1,
            heading: 'About',
            content: heading => <AboutPokemon/>
        },
        {
            id: 2,
            heading: 'Stats',
            content: heading => <h1>Hello World</h1>
        }
    ]

    const [activeTab, setActiveTab] = useState(1);
    const [currentTab, setCurrentTab] = useState(tabs[0])

    const handleTabClick = (currentTab) => {
        setActiveTab(currentTab);
        const currentTabContent = tabs.filter(item => item.id === currentTab);
        setCurrentTab(currentTabContent[0]);
    }

    const pokemon = useSelector(state => state.pokemon.pokemon)
    const containerStyles = {
        background: `linear-gradient(#${typingColors[pokemon.types[0]]}, #fff 100%)`
    }
   return(
        <div className="display-content">
            <div className="display-content_header" style={{ background: `${containerStyles.background}` }}>
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

                <div className="display-content_sprite">
                    <img src={pokemon.img} alt="poke-home-default-sprite"/>
                </div>

                <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}</h1>
            </div>
                <div className="display-content_body display-specifics">
                    <div className="display-content_body__tabs">
                    {tabs.map(item => {
                        return (
                            <div key={item.id}
                                className={`p-4 cursor-pointer w-4/12 border border-gray-100
                                    ${activeTab === item.id && 'bg-yellow-400' }
                                `}
                                onClick={() => handleTabClick(item.id)}
                            >
                                <p className="my-auto mx-auto text-center">{item.heading}</p>
                            </div>
                        )
                    })}
                    </div>
                    {currentTab.content()}
                </div>
        </div>
    )
}
