import { useState, createContext } from "react"
import Colors from "../Colors"

export const LedsContext = createContext()

export const LedsProvider = ({ children }) => {

  const initialLeds = []

  const cols = process.env.REACT_APP_COLS
  const rows = process.env.REACT_APP_ROWS

  for (let led = 1; led <= cols*rows; led++) {
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