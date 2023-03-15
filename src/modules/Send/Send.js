import { useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"
import Button from "../Button/Button"

import "./Send.scss"

const Send = () => {
  
  const { leds } = useContext(LedsContext)

  const handleClick = () => {

    const url = `${process.env.REACT_APP_SERVER_URL}/send`
    
    const headers = new Headers
    headers.append("Content-Type", "application/json")

    const raw = JSON.stringify({leds:leds})

    fetch(url, {
      method: "POST",
      headers: headers,
      body: raw
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error(error.message))
  }

  return (
    <div className="send">
      <Button onClick={ handleClick }>
        Envoyer
      </Button>
    </div>
  )
}

export default Send