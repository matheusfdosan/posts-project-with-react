# Componentes de função

Para iniciar um componente de função, obviamente, criaremos uma função que retorna um JSX. Se você viu os componentes de classes primeiro, percebeu ser necessário explicar sobre estado e eventos sintáticos. Componentes de função têm uma característica muito forte que os componentes de classe não têm, os _hooks_.

```js
export const Home = () => {
  return <h1>Hello, World!</h1>
}
```

## Estado (com hooks)

Os hooks são funções que permitem utilizar recursos como _state_ e _ciclo de vida_ em componentes de função. Para iniciar um estado na função, importamos do React.js o **useState**. A forma de usar o useState não é muito diferente de usar o estado em componentes de classes, segue a mesma ideia de ter uma propriedade inicial que pode ser mudada ao longo do código, como o _setState_:

```js
import { useState } from "react"

export const Home = () => {
  const [username, setUsername] = useState("John Doe")
  return <h1>{username}</h1>
}
```

Em `const [username, setUsername] = useState("John Doe")` está criando o nome da variável do estado e o nome da função para setar um novo estado. Diferente do estado dos componentes de classe, esse funciona de maneira individual. `username` é a variável que utilizamos para ver o estado, já o `setUsername` é a função que utilizamos para atualizar o estado. `useState("John Doe")` já inicia um valor padrão para o estado username.

## Eventos Sintáticos

Agora que já sabemos sobre o estado, vamos ver sobre eventos em componentes de função, que, basicamente, não há diferença alguma:

```js
import { useState } from "react"

export const Home = () => {
  const [username, setUsername] = useState("John Doe")

  const handleClick = () => {
    setUsername("Matheus")
  }

  return <>
    <h1>{username}</h1>
    <button onClick={handleClick} >Mudar nome</button>
  </>
}
```
