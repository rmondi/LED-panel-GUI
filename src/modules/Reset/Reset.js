import { useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"
import Button from "../Button/Button"
import Colors from "../../Colors"

import "./Reset.scss"

const Reset = () => {
  const { setLeds } = useContext(LedsContext)

  const handleClick = () => {
    let resetLeds = []

    for (let led = 1; led <= 100; led++) {
      resetLeds.push(Colors.black);
    }

    setLeds(resetLeds)
  }

  return (
    <div className="reset">
      <Button onClick={ handleClick }>
        Effacer
      </Button>
    </div>
  )
}

export default Reset