import React from "react"
import Slogan from "../Common/slogan"

export default class BannerErrorPage extends React.Component {
  render(){
    return (
      <div id="error-page-wrapper">
        <div id="error-page-bg">
          <div id="error-left-col">{this.props.code}</div>
          <Slogan top={this.props.label[0]} bottom={this.props.label[1]} />
        </div>
      </div>
    )
  }
}