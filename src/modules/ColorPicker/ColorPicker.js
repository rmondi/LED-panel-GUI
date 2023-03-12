import { useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"

import "./ColorPicker.scss"

const ColorPicker = () => {

  const { leds, setLeds, selection, setSelection } = useContext(LedsContext)

  const changeColor = () => {
    if (selection.length) {
      selection.forEach(led => leds[led] = '241,196,15')
      setLeds(leds)
      setSelection([])
    }
  }

  return <button className='color-picker' onClick={ changeColor }>Changer la couleur</button>
}

export default ColorPicker