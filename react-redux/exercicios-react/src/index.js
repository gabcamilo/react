import React from 'react' //necessário para a utilização de JSX
import ReactDOM from 'react-dom'

const elemento =  document.getElementById('root')
/*ReactDOM.render('Olá React', elemento)*/
ReactDOM.render(<h1>Olá React</h1>, elemento) //JSX: código semelhante a html que pode ser passado como parâmetro

// ReactDOM.render(
//     <ul>
//         <li>1) Pedro</li>
//         <li>2) Maria</li>
//         <li>3) Ana</li>
//     </ul>
// , elemento)

