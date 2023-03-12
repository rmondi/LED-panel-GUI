import { useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"
import Button from "../Button/Button"

import "./Send.scss"

const Send = () => {
  
  const { leds } = useContext(LedsContext)

  const handleClick = () => {
    console.log(leds)
    const rows = 10
    const data = []
    
    // for (let i = 0; i < leds.length; i += rows) {
    //   const row = leds.slice(i, i + rows)
    //   data.push(row.map(elem => elem.split(',').map(color => parseInt(color))))
    // }

    // https://fr.javascript.info/arraybuffer-binary-arrays

    // console.log(data)

    let buffer = new ArrayBuffer(300)

    console.log()
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