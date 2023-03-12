import Led from "../Led/Led"

import "./Panel.scss"

const Panel = ({ leds }) => {

  const styles = {
    gridTemplateColumns: "repeat(10, 1fr)",
    gridTemplateRows: "repeat(10, 1fr)"
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