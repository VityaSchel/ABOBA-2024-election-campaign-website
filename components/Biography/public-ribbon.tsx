import React, { Component } from 'react'

interface IPublicEventProps {
  year: Number;
  title: String;
}

class PublicEvent extends Component<IPublicEventProps> {
  render(){
    return (
      <div>
        <h4>{this.props.year}</h4>
        <div className="pseudo-link">{this.props.title}</div>
      </div>
    )
  }
}

export default class PublicRibbon extends React.Component {
  render(){
    return (
      <div id="public-ribbon">
        <div id="ribbon-items">
          <h3>Публикации и выступления</h3>
          <PublicEvent year={2012} title='AbobaFest' />
          <PublicEvent year={2014} title='Aboba PressConf' />
          <PublicEvent year={2015} title='Abobium' />
          <PublicEvent year={2018} title='Эхо Абобы' />
        </div>
      </div>
    )
  }
}