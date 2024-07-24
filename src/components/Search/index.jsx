import "./styles.css"

export const Search = ({ value, changeInput, placeholder }) => {
  return (
    <input
      type="search"
      value={value}
      onChange={changeInput}
      placeholder={placeholder}
    />
  )
}
