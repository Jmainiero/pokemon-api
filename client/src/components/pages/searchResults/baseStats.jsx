import { useSelector } from 'react-redux'
import { typingColors } from '../../../css/typingColors'
export const BaseStats = () => {
    const stats = useSelector(state => state.pokemon.pokemon.stats)
    let completed = '';
    let bgcolor = '';

    const display = stats.map((e, index) => {
        completed = (e.base_stat / 255) * 100 || 5;
        bgcolor = `#${typingColors[e.stat.name]}`
        return (
            <div className="statusbars" key={index}>
                <div className="statusbar_key table-key">
                    <span className="gender-progress_label">{e.stat.name}</span>
                </div>
                <div className="statusbar_bar">
                    <div style={{ width: `${completed}%`, backgroundColor: bgcolor }}>
                        <span >{`${e.base_stat}`}</span>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className="baseStats_container">
            <h2>Base Stats</h2>
            {display}
        </div>
    )
}
