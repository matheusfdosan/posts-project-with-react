# Mais detalhes

Vamos lá, veja esse código:

```js
export class Teste extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
    console.log(this.state.counter)
  }
  a
  render() {
    const { counter } = this.state
    return (
      <div className="App">
        <h1>{counter}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}
```

É um contador de cliques de um botão. A cada clique é adicionado +1 ao estado de `counter`. E nós temos um console.log que exibe o valor no console. Porém, o valor no console aparece como o antecessor do número do estado atual. Se o estado for 1, no console aparecerá 0. Por que isso acontece?

Isso acontece porque o React.js utiliza o Virtual DOM como uma cópia do DOM verdadeiro, utilizando para otimizar mudanças. Por conta do _setState_, pois ele é assíncrono, ou seja, tem um certo delay até ele fazer alguma diferença no código, e por conta desse delay o console.log apresenta o estado antes dele ser alterado.

Isso pode ser resolvido de várias formas. A primeira seria adicionar um delay ao console.log, podemos adicionar um _settimeout_ com o mínimo de delay possível que irá funcionar:

```js
handleClick = () => {
  this.setState({ counter: this.state.counter + 1 })
  setTimeout(() => {
    console.log(this.state.counter)
  }, 0.01)
}
```

Outra forma, mais apropriada, seria passar duas funções de callback como parâmetro para o _setState_, a primeira função seria para alterar o estado do DOM verdadeiro e a segunda para mostrar o estado no console:

```js
handleClick = () => {
  this.setState(
    (prevState, prevProps) => {
      return { counter: prevState.counter + 1 }
    },
    () => {
      console.log(this.state.counter)
    }
  )
}
```

Pegamos o estado atual e adicionamos +1. Logo após a alteração de estado, iniciamos o próximo parâmetro para mostrar o valor no console.

E se quisermos usar as props no código, passamos uma prop no elemento pai de _Teste_, como **numberToIncrement
**:

```js
handleClick = () => {
  this.setState(
    (prevState, prevProps) => {
      const numberToIncrement = prevProps.numberToIncrement
      return { counter: prevState.counter + numberToIncrement }
    },
    () => {
      console.log(this.state.counter)
    }
  )
}
```