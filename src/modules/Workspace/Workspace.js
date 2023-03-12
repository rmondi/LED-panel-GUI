import { useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"
import Panel from "../Panel/Panel.js"

import "./Workspace.scss"

const Workspace = () => {

  const { leds } = useContext(LedsContext)
  
  return (
    <div className='workspace'>
      <Panel leds={ leds } />
    </div>
  )  
}


export default Workspace