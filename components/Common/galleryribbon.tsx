import React from 'react'

class GalleryPhoho extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div className={this.props.expand?"ribbon-photo-container wide":"ribbon-photo-container"}>
        <img src={this.props.src} className="ribbon-photo" />
      </div>
    )
  }
}

export default class GalleryRibbon extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div id="gallery-ribbon">
        <GalleryPhoho src='images/fotolup-rocker.jpeg' />
        <GalleryPhoho src='images/fotolup-airplane.jpeg' expand={true} />
        <GalleryPhoho src='images/fotolup-dryer.jpeg' />
      </div>
    )
  }
}