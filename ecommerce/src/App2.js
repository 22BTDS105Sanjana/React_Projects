import React, { Component } from 'react'
import './Components/style.css'

export default class App extends Component {
  render() {
    return (
         <div>
        <h1>
            HI I am external Style
        </h1>
        <div className='Mysquare'>

        </div>
        <h2 style = {{color:"red", backgroundColor:"green"}}>Inline Styling</h2>
      </div>

    )
  }
}
