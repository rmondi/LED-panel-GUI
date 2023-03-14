import { useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"
import Button from "../Button/Button"
import Colors from "../../Colors"

import "./ColorPicker.scss"

const ColorPicker = () => {

  const { leds, setLeds, selection, setSelection } = useContext(LedsContext)

  const changeColor = () => {
    if (selection.length) {
      selection.forEach(led => leds[led] = Colors.yellow)
      setLeds(leds)
      setSelection([])
    }
  }

  return (
    <div className="color-picker">
      <Button onClick={ changeColor }>
        Changer la couleur
      </Button>
    </div>
  )
}

export default ColorPicker