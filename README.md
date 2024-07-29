# Getting Started with Create React App

Para iniciar o projeto em React.js, no terminal, escrevemos:

- `npx create-react-app nome-do-projeto` - Inicia numa nova pasta chamada _nome-do-projeto_
- `npx create-react-app .` - Inicia na pasta atual na qual o terminal está aberto

## Explicando a estrutura

Depois do create-react-app ser executado, aparecerá uma estrutura para rodar o Reat.js:

- `/node_modules` é a pasta que guarda todas as dependências utilizadas no projeto (Ela não deve ser apagada)
- `/public` guarda as imagens e assets do projeto
- `/src` é onde ficará todos os arquivos para a criação do projeto, os .jsx e .css
- `.gitignore` é responsável por ignorar arquivos e pastas que não vão para o repositório no Github (como node_modules)
- `package.json` trás uma descrição e configurações do nosso projeto, como nome do projeto, versão, quais dependências estamos usando, scripts que podem ser executados para facilitar o desenvolvimento do projeto.

## Componentes

No React podemos utilizar componentes de Classe ou de Função. Em versões antigas do React, nós precisavamos ter componentes de função como _Stateless_, ou seja, sem estado, e componentes de Classe como _Stateful_, com estado. Hoje já é diferente, nós temos os Hooks do React que nos permite controlar o estado do componente, sendo ele de classe ou de função.

- [Componentes de Classes](docs/componentes-de-classes.md)
- [Componentes de Função](docs/componentes-de-funcao.md)