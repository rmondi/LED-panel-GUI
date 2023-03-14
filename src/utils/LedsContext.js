import { useState, createContext } from "react"
import Colors from "../Colors"

export const LedsContext = createContext()

export const LedsProvider = ({ children }) => {

  const initialLeds = []

  for (let led = 1; led <= 100; led++) {
    initialLeds.push(Colors.black);
  }

  const [ leds, setLeds ] = useState(initialLeds)
  const [ selection, setSelection ] = useState([])

  return (
    <LedsContext.Provider value={ { leds, setLeds, selection, setSelection } }>
      { children }
    </LedsContext.Provider>
  )
}