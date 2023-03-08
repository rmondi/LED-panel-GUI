import "./panel.scss"

import Led from "../led/led"

const Panel = ({ leds, selection }) => {

  return (
    <div className='panel'>
      {
        leds.map((color, index) => {
          return (
            <Led
              key={ index }
              index={ index }
              color={ color }
              selected={ selection.includes(index) ? true : false }
            />
          )
        })
      }
    </div>
  )
}

export default Panel