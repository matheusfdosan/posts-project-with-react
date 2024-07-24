import "./styles.css"
import { Component } from "react"
import { Posts } from "../../components/Posts"
import { Button } from "../../components/Button"
import { fetchPosts } from "../../utils/fetch-posts"
import { Search } from "../../components/Search"

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 25,
    searchValue: "",
  }

  async componentDidMount() {
    const posts = await fetchPosts()
    const { page, postsPerPage } = this.state
    this.setState({
      posts: posts.slice(page, postsPerPage),
      allPosts: posts,
    })
  }

  loadMorePosts = (e) => {
    const { allPosts, page, postsPerPage } = this.state
    this.setState({
      posts: allPosts.slice(page, postsPerPage + 25),
      postsPerPage: postsPerPage + 25,
    })

    if (postsPerPage === allPosts.length - 25) {
      e.target.disabled = true
    }
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  render() {
    const { allPosts, posts, searchValue } = this.state

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : posts

    return (
      <div className="App">
        <div className="search-container">
          <Search
            value={searchValue}
            changeInput={this.handleChange}
            placeholder="Bucar postagem"
          />
          {!!searchValue && (
            <>
              <h1>Pesquisando por: {searchValue}</h1>{" "}
              <span>
                {filteredPosts.length === 0
                  ? "Nenhuma postagem encontrada 😥"
                  : `${filteredPosts.length} resultados encontrados`}{" "}
              </span>
            </>
          )}
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

        {!searchValue && (
          <Button
            content={"Carregar mais postagens"}
            clickButton={this.loadMorePosts}
          />
        )}
      </div>
    )
  }
}

export default Home
