import { useState, useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"

import "./Led.scss"

const Led = ({ color, index }) => {

  const ledsContext = useContext(LedsContext)
  const [ isSelected, setIsSelected ] = useState(false)
  
  const handleClick = () => {
    setIsSelected(!isSelected)
    
    let selection = ledsContext.selection

    const indexPos = selection.indexOf(index)

    if (indexPos === -1) selection.push(index)
    else selection.splice(indexPos, 1)
    
    ledsContext.setSelection([...selection])
  }

  return (
    <div className={ isSelected ? 'led selected' : 'led' } onClick={ handleClick }>
      <div style={ { backgroundColor:`rgb(${color})` } }></div>
    </div>
  )
}

export default Led