import { typingColors } from '../../../css/typingColors'

export const Moves = ({ moves }) => {
    console.log(moves)
    const display = moves.sort((a, b) => { return a.level - b.level }).map((e, index) => {
        const background = `#${typingColors[e.type]}`
        return (
            <tr className="" key={e} style={{ background: `${background}` }}>
                <td className="">
                    <span className="">{e.level}</span>
                </td>
                <td className="">
                    <span className="">{e.name}</span>
                </td>
                <td className="">
                    <span className="">{e.type.charAt(0).toUpperCase() + e.type.substring(1)}</span>
                </td>
                <td className="">
                    <span className="">{e.damage_class.charAt(0).toUpperCase() + e.damage_class.substring(1)}</span>
                </td>
                <td className="">
                    <span className="">{e.power}</span>
                </td>
                <td className="">
                    <span className="">{e.pp}</span>
                </td>
            </tr>
        )

    })
    return (
        <div className="moves">
            <h2>By Leveling Up</h2>
            <table>
                <tr>
                    <td>
                        <span className="">Level</span>
                    </td>
                    <td>
                        <span className="">Move</span>
                    </td>
                    <td>
                        <span className="">Type</span>
                    </td>
                    <td>
                        <span className="">Category</span>
                    </td>
                    <td>
                        <span className="">Power</span>
                    </td>
                    <td>
                        <span className="">PP</span>
                    </td>
                </tr>
                {display}
            </table>
        </div>
    )
}