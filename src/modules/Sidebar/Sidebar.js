import ColorPicker from "../ColorPicker/ColorPicker.js"
import Reset from "../Reset/Reset.js"
import Send from "../Send/Send.js"

import "./Sidebar.scss"

const Sidebar = () => {
  
  return (
    <div className='sidebar'>
      <div className="sidebar__actions">
        <ColorPicker />
        <Send />
        <Reset />
      </div>
    </div>
  )
}

export default Sidebar