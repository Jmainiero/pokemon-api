export const DisplayGender = (props) => {
  let completed = '';
  let bgcolor = '';

    const display = Object.keys(props.props.pokemon.gender).map((e,index) => {
        completed = props.props.pokemon.gender[e] || 5;
        bgcolor = (e === 'male') ? bgcolor = '#4da5e1' : '#FF6060'

        if(e !== 'genderless'){
            return(
                <div className="gender-progress_container" key={e}>
                    <div className="gender-progress_key">
                        <span className="gender-progress_label">{e.charAt(0).toUpperCase() + e.substring(1)}</span>
                 </div>
                <div className="gender-progress_bar" style={{ }}>
                    <div style={{width:`${completed}%`, backgroundColor: bgcolor}}>
                        <span >{`${props.props.pokemon.gender[e]}%`}</span>
                    </div>
                </div>
            </div>
            )
        } else {
            if(props.props.pokemon.gender.genderless === false){
                return;
            } else {
                return(
                <div className="gender-progress_container" key={e}>
                    <div className="gender-progress_key">
                        <span className="gender-progress_label">{e.charAt(0).toUpperCase() + e.substring(1)}</span>
                </div>
                 <div className="gender-progress_bar">
                        <span >Species Unknown</span>
                </div>
            </div>
                )
            }
        }
    })


    return(
        <div className="breeding-statusbars">
            {display}
        </div>
    )
}
