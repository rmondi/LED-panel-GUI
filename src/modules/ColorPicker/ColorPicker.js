import { useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"

import "./ColorPicker.scss"

const ColorPicker = () => {

  const ledsContext = useContext(LedsContext)

  let leds = ledsContext.leds

  const changeColor = () => {
    if (ledsContext.selection.length) {
      ledsContext.selection.forEach(led => leds[led] = '241,196,15')
      ledsContext.setLeds(leds)
    }
  }

  return <button className='color-picker' onClick={ changeColor }>Changer la couleur</button>
}

export default ColorPicker