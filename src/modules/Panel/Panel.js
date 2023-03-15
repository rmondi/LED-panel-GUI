import Led from "../Led/Led"

import "./Panel.scss"

const Panel = ({ leds }) => {

  const styles = {
    gridTemplateColumns: `repeat(${ process.env.REACT_APP_COLS }, 1fr)`,
    gridTemplateRows: `repeat(${ process.env.REACT_APP_ROWS }, 1fr)`
  }

  return (
    <div className='panel' style={ styles }>
      {
        leds.map((color, index) => {
          return <Led key={ index } index={ index } color={ color } />
        })
      }
    </div>
  )
}

export default Panel