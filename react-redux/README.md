# React + Redux

*Conteúdo obtido durante a realização do curso [React + Redux: Fundamentos e Duas Apps do ABSOLUTO ZERO!](https://www.udemy.com/react-redux-pt/)*

*[Tutorial de Markdown](https://github.com/luong-komorebi/Markdown-Tutorial)*

*******
## Índice  
 1. [Introdução](#intro)
 1. [Fundamentos React](#fundamentos)
 
*******

<div id='intro'/> 

## Seção 1 - Introdução
[Apostila do curso](http://files.cod3r.com.br/apostila-react-redux.pdf)

### Configuração do Ambiente

<div id='fundamentos'/>

## Seção 2 - Fundamentos React

### Configurando a Aplicação

1. Configurar a aplicação com o pacote **create-react-app**

 Instalar o pacote:    
 `$ npm i -g create-react-app`

 Criar o projeto:
 
 `$ create-react-app exercicios-react`

2. Limpar o projeto para Inicia-lo em branco
    
 * Deletar a pasta **src**
 * Recria-la contendo apenas o arquivo **index.js**

### Olá React

No momento em que o React foi configurado, três dependências foram instaladas e podem ser encontradas no **package.json**, elas são:

 1. react
 2. react-dom
  É o ponto de contato do React com a dom, ou seja, o modelo de objetos do browser.
 3. react-scripts
  Realiza todo o processo de builds. A configuração do build está neste pacote

*Das três dependências instaladas, a interação via código será realizada apenas com o react e o react-dom.*

Para executar a aplicação é utilizado o comando `$ npm start`.

### O que é JSX?

A build é gerada, em memória, é criado o arquivo **main.chunk.js**.
Portanto, no fim das contas, a sintaxe JSX na verdade será convertida para um arquivo JavaScript puro.
O arquivo main.chunk.js ficará sempre em memória, a nao ser que seja gerado o build de produção com `$ npm run build`, neste caso, será criada uma pasta *build* que conterá a página completa.

**Portanto o JSX faz com que não seja necessário maipular a DOM de forma manual**

No exemplo abaixo a DOM é manipulada manualmente:

```
const lista = document.createElement('ul')

let item = document.createElement('li')
let texto = document.createTextNode('1) Pedro')
item.appendChild(texto)
lista.appendChild(item)

item = document.createElement('li')
texto = document.createTextNode('2) Maria')
item.appendChild(texto)
lista.appendChild(item)

item = document.createElement('li')
texto = document.createTextNode('3) Ana')
item.appendChild(texto)
lista.appendChild(item)

const elemento = document.getElementById('root')
elemento.appendChild(lista)
```

Agora com JSX:

```
import React from 'react'
import ReactDOM from 'react-dom'

const elemento =  document.getElementById('root')

ReactDOM.render(
    <ul>
        <li>1) Pedro</li>
        <li>2) Maria</li>
        <li>3) Ana</li>
    </ul>
, elemento)
```
Quando a página é do tipo **single page application**, todo o conteúdo gerado na página será gerado a partir do JavaScript, inclusive o Html.  A patir do JSX é possível gerar de um a forma mais simples este conteúdo, logo:

**JSX é uma sintaxe parecida com Html, mas que ao fim, será convertida em código JavaScript**

Ou seja, Tudo que está sendo escrito no arquivo **é JavaScript!**

## Seção 3 - 

## Seção 4 - 

## Seção 5 - 

## Seção 6 - 

## Seção 7 - 

## Seção 8 - 

## Seção 9 - 

## Seção 10 - 

## Seção 11 - 

## Seção 12 - 

## Seção 13 - 

## Seção 14 - 

## Seção 15 - 

## Seção 16 - 

## Seção 17 -

## Seção 18 -

## Seção 19 -

## Seção 20 -

## Seção 21 -

## Seção 22 -

## Seção 23 -

