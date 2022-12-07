import React from 'react'
import './button.css'

const sayHello = () =>{
    console.log('Hello')
}

const Button = ({label})=> {
    return <button className='btn' onClick={sayHello}>{label}</button>
}

// class Button extends React.Component{
//     render(){
//         return <button className='btn'>{this.props.label}</button>  
//     }
// }

Button.defaultProps = {
    label: 'Clique Aqui'
}

export default Button