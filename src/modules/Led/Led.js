import { useState, useEffect, useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"
import Colors from "../../Colors"

import "./Led.scss"

const Led = ({ color, index }) => {

  const styles = {
    backgroundColor: `rgb(${color === Colors.black ? Colors.gray : color})`
  }

  const { selection, setSelection } = useContext(LedsContext)
  const [ isSelected, setIsSelected ] = useState(false)

  useEffect(() => {
    !selection.length && setIsSelected(false)
  }, [selection])
  
  const handleClick = () => {
    setIsSelected(!isSelected)
    
    let newSelection = selection

    const indexPos = newSelection.indexOf(index)

    if (indexPos === -1) newSelection.push(index)
    else newSelection.splice(indexPos, 1)
    
    setSelection([...newSelection])
  }

  return (
    <div className={ isSelected ? 'led selected' : 'led' } onClick={ handleClick }>
      <div style={ styles }></div>
    </div>
  )
}

export default Led