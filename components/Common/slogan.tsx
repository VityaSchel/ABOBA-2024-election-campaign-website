import React, { Component } from "react"

interface ISlogan {
  top: string;
  bottom: string;
}

export default class Slogan extends Component<ISlogan> {
  render(){
    return (
      <h1 id="slogan">
        <span>{this.props.top}</span>
        <br></br>
        <span>{this.props.bottom}</span>
      </h1>
    )
  }
}