import { useContext, useState, useEffect } from "react"
import { LedsContext } from "../../utils/LedsContext"

import Led from "../Led/Led"

import "./Panel.scss"

const Panel = () => {
  const ledsContext = useContext(LedsContext)

  const [ isLoaded, setIsLoaded ] = useState(false)

  const styles = {
    gridTemplateColumns: "repeat(10, 1fr)",
    gridTemplateRows: "repeat(10, 1fr)"
  }

  return (
    <div className='panel' style={ styles }>
      {
        ledsContext.leds.map((color, index) => {
          return <Led key={ index } index={ index } color={ color } />
        })
      }
    </div>
  )
}

export default Panel