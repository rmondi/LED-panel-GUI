import "./led.scss"

const Led = ({ selected, color, index }) => {

  const select = () => {
    // selected ? this.props.unselect_led(index) : this.props.select_led(index);
  }

  return (
    <div className={ selected ? 'led selected' : 'led' } onClick={ select }>
      <div style={ { backgroundColor:`rgb(${color})` } }></div>
    </div>
  )
}

export default Led