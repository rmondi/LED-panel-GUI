import { useContext } from "react"
import { LedsContext } from "../../utils/LedsContext"
import Button from "../Button/Button"
import Colors from "../../Colors"

import "./Reset.scss"

const Reset = () => {
  const { setLeds } = useContext(LedsContext)

  const handleClick = () => {

    const url = `${process.env.REACT_APP_SERVER_URL}/clear`
    
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    fetch(url, {
      method: "GET",
      headers: headers
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error(error.message))
  }

  return (
    <div className="reset">
      <Button onClick={ handleClick }>
        Effacer
      </Button>
    </div>
  )
}

export default Reset
