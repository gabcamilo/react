import React from 'react'

let isLegal = true
export default (props) => //props são propriedades passadas ao componente
    <div>
        <h1>{props.valor}</h1>
        <h2>{Math.random()}</h2>
        <p>É Legal? =>>>> {isLegal ? 'Sim' : 'Não'}</p>
        <p>{props.valor2}</p>
    </div>

// export default () => 
//     <div>
//         <h1>Primeiro Componente! (ARROW)</h1>
//     </div>


// function primeiro() {
//     return <h1>Primeiro Componente!</h1>
// }
// export default primeiro