import { useState, useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"
import { ChromePicker } from "react-color"
import Button from "../Button/Button"

import "./ColorPicker.scss"

const ColorPicker = () => {

  const [ color, setColor ] = useState({r: '255', g: '255', b: '255', a: '1'})
  const { leds, setLeds, selection, setSelection } = useContext(LedsContext)

  const handleChange = color => {
    setColor(color.rgb)
  }
  
  const handleClick = () => {
    
    if (selection.length) {
      selection.forEach(led => leds[led] = `${color.r},${color.g},${color.b}`)
      setLeds(leds)
      setSelection([])
    }
  }

  return (
    <div className="color-picker">
      <div className="color-picker__colors">
        <ChromePicker color={ color } onChange={ handleChange } />
      </div>
      <div className="color-picker__action">
        <Button onClick={ handleClick }>
          Changer la couleur
        </Button>
      </div>
    </div>
  )
}

export default ColorPicker