import "./styles.css"

export const Button = ({ content, clickButton }) => {
  return <button onClick={clickButton}>{content}</button>
}
