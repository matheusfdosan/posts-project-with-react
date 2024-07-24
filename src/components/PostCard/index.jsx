import "./styles.css"

export const PostCard = ({ id, title, body }) => {
  return (
    <li className={"post-" + id}>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  )
}
