import React from 'react' //necessário para a utilização de JSX
import ReactDOM from 'react-dom'
import MultiElementos from './componentes/MultiElementos'
//import {CompA,  CompB as B} from './componentes/DoisComponentes'// é possivel adicionar um alias como em B
// import PrimeiroComponente from './componentes/PrimeiroComponente'
//ps. não é preciso que o nome do componente seja igual ao nome do arquivo, é apenas uma conveção

const elemento =  document.getElementById('root')
ReactDOM.render(
    <div>
        <MultiElementos/>

        {/* <CompA valor='Olá, eu sou o A'/>
        <B valor='B na área'/> */}
    </div>
, elemento) 

// ReactDOM.render(<h1>Olá React</h1>, elemento) //JSX: código semelhante a html que pode ser passado como parâmetro

/*ReactDOM.render('Olá React', elemento)*/

// ReactDOM.render(
//     <ul>
//         <li>1) Pedro</li>
//         <li>2) Maria</li>
//         <li>3) Ana</li>
//     </ul>
// , elemento)

