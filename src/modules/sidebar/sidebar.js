import "./sidebar.scss"

import ColorPicker from "../color-picker/color-picker.js"

const Sidebar = ({ selection }) => {
  
  return (
    <div className='sidebar'>
      { selection.length ? <ColorPicker selection={ selection } /> : null }
    </div>
  )
}

export default Sidebar