import { useState, createContext } from "react"

export const LedsContext = createContext()

export const LedsProvider = ({ children }) => {

  const initialLeds = []

  for (let led = 1; led <= 100; led++) {
    initialLeds.push('189,195,199');
  }

  const [ leds, setLeds ] = useState(initialLeds)
  const [ selection, setSelection ] = useState([])

  return (
    <LedsContext.Provider value={ { leds, setLeds, selection, setSelection } }>
      { children }
    </LedsContext.Provider>
  )
}