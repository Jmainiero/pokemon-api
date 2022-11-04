export const DisplayGender = (props) => {
  let completed = '';
  const bgcolor = '#FF77DD';

  const containerStyles = {
    height: 30,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    color: 'black'
  }

    const display = Object.keys(props.props.pokemon.gender).map((e,index) => {
            completed = props.props.pokemon.gender[e] || 50;
        return(
            <div className="gender-progress_container" key={e}>
                <div className="gender-progress_key">
                    <span className="gender-progress_label">{e.charAt(0).toUpperCase() + e.substring(1)}</span>
                </div>
                    <div style={fillerStyles}>
                        <span style={labelStyles}>{`${completed}%`}</span>
                    </div>
            </div>
        )
    })


    return(
        <div className="breeding-statusbars">
            {display}
        </div>
    )
}
