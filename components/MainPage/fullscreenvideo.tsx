import React from "react"

export default class FullScreenVideo extends React.Component {
  constructor (props){
    super(props)

    this.fullscreenref = React.createRef()
  }

  handleClick(): void {
    this.fullscreenref.current.style.display = ""
  }

  render(){
    return (
      <div id="fullscreenvideo" ref={this.fullscreenref}>
        <iframe width="100%" height="100%"
          src="https://www.youtube-nocookie.com/embed/DncJywKkjBQ"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <div id="video-popup-close">
          <button onClick={() => this.handleClick()} className="lead-icon-button">
            <span className="button-color-transition">Закрыть</span>
          </button>
        </div>
      </div>
    )
  }
}