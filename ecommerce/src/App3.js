



import React, { Component } from 'react'
import Propcomponent from './Components/Propcomponent'
export default class App_state extends Component {
    state = 
    {
        tname : "Sanjana",
        sec : "D"
    }
  render() {
    return (
      <div>
        <Propcomponent section = {this.state.sec} />
        I am {this.state.tname} sec {this.state.sec}
      </div>
    )
  }
}
