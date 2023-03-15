import "./Button.scss"

const Button = ({ onClick, children }) => {

  const handleClick = () => {
    onClick()
  }

  return <button className="button" onClick={ handleClick }>{ children }</button>
}

export default Button