import React, { Component } from 'react'

export default class Propcomponent extends Component {
  render() {
    return (
      <div>
        <h2>And now I am studying {this.props.sec}</h2>
      </div>
    )
  }
}
