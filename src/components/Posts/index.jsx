import "./styles.css"
import { PostCard } from "../../components/PostCard"

export const Posts = ({ posts = [] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </ul>
  )
}
