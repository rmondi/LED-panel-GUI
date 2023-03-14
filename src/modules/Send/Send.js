import { useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"
import Button from "../Button/Button"

import "./Send.scss"

const Send = () => {
  
  const { leds } = useContext(LedsContext)

  const handleClick = () => {

    const buffer = new ArrayBuffer(300)
    const view = new Uint8Array(buffer)
    
    const bytes = []

    leds.forEach(led => {
      const rgb = led.split(',').map(code => parseInt(code))
      bytes.push(...rgb)
    });

    bytes.forEach((byte, index) => view[index] = byte)

    console.log(view)
  }

  return (
    <div className="send">
      <Button onClick={ handleClick }>
        Envoyer
      </Button>
    </div>
  )
}

export default Send