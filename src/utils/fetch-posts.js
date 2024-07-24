export const fetchPosts = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => new Error(error))
}
