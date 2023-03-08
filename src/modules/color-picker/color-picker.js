import "./color-picker.scss"

const ColorPicker = () => {

  const changeColor = () => {
    //this.props.edit_leds(this.props.selection, '241,196,15');
  }

  return <button className='color-picker' onClick={ changeColor }>Changer la couleur</button>
}

export default ColorPicker