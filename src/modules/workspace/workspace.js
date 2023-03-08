import "./workspace.scss"

import Panel from "../panel/panel.js"

const Workspace = ({ leds }) => {
  
  return (
    <div className='workspace'>
      <Panel leds={this.props.leds}/>
    </div>
  )  
}


export default Workspace