# Componentes de Classe

Para criar um componente de classe, vamos iniciar da seguinte forma:

```js
import { Component } from "react"

// Iniciamos com a expressão class, que vai herdar as propriedades de Component
// O Component deve ser importado acima
class App extends Component {
  // Aqui dentro colocamos o método render() que é responsável por renderizar o JSX
  render() {
    return <h1>Mostra o JSX</h1>
  }
}
```

> Esse é um componente sem estado (stateles). Não há dados circulando através do elemento. Mas quando houver dados que mudam frequentemente (dados dinâmicos), utilize o estado do componente.

## Colocando estado no componente de Classe

Primeiramente, o que é o Estado? O Estado são dados que o componente utiliza. E toda vez que o estado mudar, o componente é renderizado novamente por conta da mudança do estado.

Vamos lá, como é um componente de Classe, temos um `constructor` que recebe `props` como parâmetro:

```js
import { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props)
    // Como é uma classe com herança, utilizamos super(props) para chamar o construtor de Component
    this.state = { name: "Matheus Faustino" }
    // O this.state é um objeto de Component, funciona como o Hook useState. Tem um estado, e pode ser alterado
  }

  render() {
    const { name } = this.state
    // Aqui já podemos usar JavaScript normal para pegar o estado de *name* com desestruturação
    return <h1>Mostra o JSX de {name}</h1>
    // E mostrar na tela usando os templates literals do JSX que vem sem o cifão
  }
}
```

> É o que precisamos para torna esse componente em um componente stateful (com estado).

## Eventos Sintéticos

No JavaScript temos os eventos para verificar ações que acontecem no sistema que estamos desenvolvendo. No React também podemos usar eventos:

```js
import { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "Matheus Faustino" }
  }

  // Criamos um método que mostra uma mensagem de click
  handleClick() {
    console.log(`Você clicou!`)
  }

  render() {
    const { name } = this.state
    return (
      <>
        <h1>Mostra o JSX de {name}</h1>
        <button onClick={this.handleClick}>Click</button>
        <!--
          Toda vez que o botão for clicado, iniciará o método *handleClick*, que mostra a mensagem que o botão foi clicado
        -->
      </>
    )
  }
}
```

Porém, como faríamos para passar um estado para o evento? Primeiramente, não é possível acessar a expressão `this` num método. Porque o React não faz a vinculação com o this e o método dentro da classe. Para resolver isso, precisamos apenas fazer essa vinculação manualmente (vincular = bind).

```js
import { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    // O código acima é responsável por vincular a expressão this ao método *handleClick*

    this.state = { name: "Matheus Faustino" }
  }

  handleClick() {
    // Vemos que não conseguimos mostrar no console o estado de name. Para isso fizemos o "bind" no constructor.
    const { name } = this.state
    console.log(`Você clicou! ${name}`)
  }

  render() {
    const { name } = this.state
    return (
      <>
        <h1>Mostra o JSX de {name}</h1>
        <button onClick={this.handleClick}>Click</button>
      </>
    )
  }
}
```

Agora, sim, podemos fazer uso de métodos com estados incluídos. Como foi dito anteriormente, o `this.state` funciona como o hook `useState` que tem a função de compartilhar o estado (state) e de setar um novo valor ao estado (setState). Isso também tem aplicação com componentes de classes. Faremos um componente que, ao clicar num botão, o estado irá mudar:

```js
import { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = { name: "Matheus Faustino" }
  }

  handleClick() {
    this.setState({ name: "Indiana Jones" })
    // Estamos setando um novo estado para a propriedade name do objeto this.state
  }

  render() {
    const { name } = this.state
    return (
      <>
        <h1>Mostra o JSX de {name}</h1>
        <button onClick={this.handleClick}>Click</button>
      </>
    )
  }
}
```

> Handle significa lidar, ou seja, lidando com o Click. É um padrão que os devs em React.js utilizam.

Resumindo, usamos `this.state = {propriedade: "valor"}` para criar um estado com propriedades e valores, para usarmos ao longo do código. E `this.setState({propriedade: "novoValor"})` para atualizar o estado do componente.

> Porém, há uma outra forma de se utilizar métodos numa classe sem precisar fazer a vinculação. Apenas crie o método como uma arrow function:

> Outra coisa bem importante, é que existe no JavaScript algo chamado de `Public class fields` que permite criar propriedade sem estarem em um construtor e sem o _this_. Isso também se aplica aos componentes de classes:

```js
import { Component } from "react"

class App extends Component {
  state = {
    name: "Matheus Faustino",
    switched: true,
    countSwitch: 0,
  }
  // Public class field, não precisamos de construtor para as propriedades

  switchName = () => {
    if (this.state.switched) {
      this.setState({ name: "John Wick", switched: false })
      this.state.countSwitch++
    } else {
      this.setState({ name: "Matheus Faustino", switched:  true })
      this.state.countSwitch++
    }
  }
  // Método feito em arrow function não precisa fazer bind no constructor

  render() {
    const { name, countSwitch } = this.state

    return (
      <div>
        <p>{name}</p>
        <button onClick={this.switchName}>Mudar Nome</button>
        <br />
        <!-- Mostrando quantas vezes o "name" foi alterado  -->
        <span>{countSwitch}</span>
      </div>
    )
  }
}

export default App
```

## Utilizado o estado com arrays

Podemos utilizar arrays no estado. Isso se aplica em, por exemplo, uma lista de usuários num banco de dados. E queremos mostrar todos eles na tela por meio de **\<li>**. Veja:

```js
import { Component } from "react"

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        username: "Viola Lawson",
        email: "wapde@ujpizfuw.pk",
        password: "XN6YXZxFvmV1JaDRxA",
      },
      {
        id: 2,
        username: "Bess Norman",
        email: "hanol@ugzulabu.kw",
        password: "Yn1YuDGQC6ZTK",
      },
      {
        id: 3,
        username: "Chase Tyler",
        email: "nir@odumo.sr",
        password: "Sb2pqs2f4IbDWtuE",
      },
    ],
  }

  render() {
    const { users } = this.state

    return (
      <div>
        <h1>Lista de Usuários</h1>
        <ul>
          {users.map((user) => (
            <li>
              <h2>{user.username}</h2>
              <p>
                Email: <u>{user.email}</u>
              </p>
              <p>
                Senha: <u>{user.password}</u>
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
```

Aqui estamos utilizando o método **map** para percorrer a lista de usuários. Basicamente, pegamos cada objeto dentro do array _users_ e colocamos suas propriedades na tag \<li>.

Internamente, no console, vai dar um aviso: **_Warning: Each child in a list should have a unique "key" prop._** Isso significa que, como renderizamos vários elementos em listas, cada item precisa ter uma propriedade única chamada de _key_, por isso colocamos um id em cada usuário. Isso ajuda o React.js a identificar quais itens foram mudados, adicionados ou removidos.

Então, colocamos a propriedade key no elemento pai que guarda os dados, no nosso caso é a tag \<li>, que vai ficar **_\<li key={user.id}>_**.

```js
{
  users.map((user) => (
    <li key={user.id}>
      <h2>{user.username}</h2>
      <p>
        Email: <u>{user.email}</u>
      </p>
      <p>
        Senha: <u>{user.password}</u>
      </p>
    </li>
  ))
}
```

## Lifecycle methods (métodos de ciclo de vida)

No React temos os métodos de ciclo de vida, eles são métodos que podemos usar em momentos específicos do componente:

**_componentDidMount_**: Um exemplo: após o carregamento do componente, algo deve acontecer. Isso é uma oportunidade de utilizar o método `componentDidMount()`, que é um método assim como o `render()`, ele é herança de _Component_. E vai cumprir com a missão de tomar alguma atitude após o carregamento do componente.

```js
import { Component } from "react"

class App extends Component {
  state = {
    title: "",
    description: "",
  }

  componentDidMount() {
    this.setState({
      title: "Brave mood",
      description:
        "Life therefore someone gray origin rope constantly private hall pony fuel.",
    })
  }

  render() {
    const { title, description } = this.state
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Sei lá</button>
      </div>
    )
  }
}

export default App
```

No código acima, vemos um bom exemplo de uso do método. Assim que o componente carregar, alterar o estado do componente. Ou podemos fazer o seguinte: assim que o componente carregar, buscar no banco de dados as informações necessárias para colocar no estado do componente.

**_componentDidUpdate_**: Esse método é chamado depois que o componente é atualizado, devido à mudança de estado ou recebe novas props. Esse método tem dois parâmetros, _prevProps_ e _prevState_, que permite comparar as novas props e estado com os anteriores.

### Buscando dados externos com fetch (Data fetching)

Agora, vamos pegar dados de uma API online e colocar no nosso código, utilizando a propriedade `fetch` do JavaScript.

Utilizando os links fornecidos no site `https://jsonplaceholder.typicode.com/`, temos dados para requisitar, como /posts, /photos, /users, etc. Nesse exemplo, vamos utilizar os _posts_.

```js
import { Component } from "react"

class App extends Component {
  state = {
    posts: [],
    // Posts deve ficar vazio pois ainda não buscamos na API
  }

  componentDidMount() {
    // Utilizamos o componentDidMount para, assim que o componente carregar, buscar os dados na API e mudar o estado de posts.
    this.fetchData()
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }))
      .catch((error) => new Error(error))
    // Depois de buscar os dados da API, vamos, primeiramente, passar esses dados para o formato JSON e depois alterar o estado de posts para colocar os dados da API.
  }

  fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
    // Essa função assincrona é responsável por buscar os dados da API do *jsonplaceholder*
  }

  render() {
    const { posts } = this.state

    return (
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}
```

## Props e organização dos componentes

Como sabemos, o React.js possui componentes que nos permitem segmentar a interface de usuário em partes únicas e reutilizáveis. Como um Lego, cada peça é importante para a construção da interface.

Vamos, na pasta "src", criar uma pasta chamada "components", tudo que for componente irá ficar nessa pasta.

```js
import { Component } from "react"

class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.fetchData()
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }))
      .catch((error) => new Error(error))
  }

  fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
  }

  render() {
    const { posts } = this.state

    return (
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}
```

No código acima, temos uma lista e os itens da lista, esses itens podem se tornar componentes, para serem organizados e reutilizados em outro lugar.

```js
render() {
  const { posts } = this.state
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        )
      })}
    </ul>
  )
}
```

Concordamos que essa parte do código é o Pai e o Filho no mesmo componente, sendo o Pai a tag \<ul> e o Filho o retorno da chamada _posts.map(return \<li>...\</li>)_. Com o \<li> tornando-se o componente filho, responsável por carregar todos os cards de postagem. Sendo assim, dentro da pasta _components_, criaremos uma pasta com o nome do componente. No caso, escolhi o nome _PostCard_.

Dentro de PostCard, vamos criar o arquivo `index.jsx` ou `index.js`, local onde vai ficar o código do componente.

Nesse _index.js_, ficarão os itens da nossa lista. Basicamente, vamos ter um componente Pai e o componente Filho. O componente Pai é o _App_ que está responsável por ser o container dos nossos posts. E também é responsável por buscar os posts e trazer para a interface.

Componente Filho: `./components/PostCard/index.js`:

```js
export const PostCard = () => {
  return (
    <li key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </li>
  )
}
```

Esse componente de função vai mostrar nossos posts na página. Porém, não estamos dando-lhe nenhum tipo de dado, como faremos para esse componente acessar o estado do componente Pai? Simples! vamos apenas passar os dados por `props`. Veja:

```js
import { Component } from "react"
import { PostCard } from "./components/PostCard"
// Importamos o componente PostCard para podermos mandar dados através das props.

class App extends Component {
  //... (Resto do código)

  render() {
    const { posts } = this.state

    return (
      <ul>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          )
        })}
      </ul>
    )
  }
}
```

Para podermos utilizar os componentes em outros componentes, após importarmos ele, utilizamos eles como se fossem Tags HTML, \<Componente /> dessa forma. E passamos atributos, sendo as props. `<Componente nome={this.state.nome} email={this.state.email} />`

Já no componente Filho, temos que receber as props. Fazemos isso por meio do parâmetro da função do componente. Como sabemos, cada item de um array deve ter uma chave única, uma _key_. Porém, não dá para colocar a key no componente Filho, ela deve ser colocada dentro de posts.map(). Contudo, fazermos o seguinte, mandamos uma key como props para o componente Filho, mas não usamos. E se quiser o id, mande outra props. Veja:

```js
export const PostCard = (props) => {
  // As props vem em formato de objeto, então para podermos usá-la no código, fazemos: props.title, props.body e props.id
  return (
    <li className={"post-" + props.id}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </li>
  )
}
```

Por conta de props ser um objeto, abre espaço para fazer um código mais limpo com desestruturação:

```js
export const PostCard = ({ id, title, body }) => {
  return (
    <li className={"post-" + id}>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  )
}
```

### Organizando melhor o código

#### Utils (Utilidades)

Além de separar organizar apenas os componentes em pasta de componentes, podemos também separar as utilidades do código, como, por exemplo, o método de buscar os dados na API. Podemos criar, no diretório "src", a pasta **utils**

```js
class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.loadPosts()
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }))
      .catch((error) => new Error("Erro ao buscar dados na API: " + error))
  }

  loadPosts = async () =>
    await fetch("https://jsonplaceholder.typicode.com/posts")
  // ... (Resto do código)
}
```

Essa parte do código, começando do _componentDidMount_ até _loadPosts_ pode ser resumida em poucas linhas. Primeiro, vamos ir na pasta _utils_ e criar um arquivo .js que fará o trabalho de buscar os dados na API (`fetch-posts.js`):

```js
export const fetchPosts = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => new Error(error))
}
```

Esse é o código responsável por buscar os dados da API e converter para JSON. Ou seja, no componente Pai, o que precisamos é apagar todo o código relacionado à busca de dados. E o que resta é apenas a mudança de estado.

```js
import { fetchPosts } from "./utils/fetch-posts"
// Importamos o arquivo para podermos usá-lo

class App extends Component {
  state = {
    posts: [],
  }

  async componentDidMount() {
    const posts = await fetchPosts()
    // Pegamos os dados e colocamos dentro de posts
    this.setState({ posts })
    // Alteramos o estado, e podemos utilizar na interface
  }
  // ... (Resto do código)
}
```

### Templates

Concordamos que toda a nossa App, é uma página completa. Então, vamos pensar que a primeira coisa que vemos quando abrimos a aplicação no navegador é o componente App, então esse componente deveria ser chamado de **_Home_**. Para organizar melhor, vamos iniciar uma pasta chamada `templates`, que vai ser o local onde ficarão todas as nossas páginas completas. E nela vamos criar a pasta Home e vamos jogar o _App.js_, _App.css_ e _App.test.js_ e renomear de App para _index.jsx_, _styles.css_ e _Home.test.jsx_.

### Styles

Outra mudança que iremos fazer é criar uma pasta chamada `styles`, e jogar o index.css lá dentro, renomeando-o para `global-styles.css`. Isso é importante para o que vamos ver mais para frente sobre **Styles Components**.

[Mais detalhes sobre this.state e classes](./detalhes-sobre-state-e-classes.md)
