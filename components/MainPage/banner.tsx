import React from "react"
import Link from "next/link"
import Form from "../Common/form"
import FullScreenVideo from "./fullscreenvideo"
import Slogan from "../Common/slogan"

const fullScreenVideoRef = React.createRef()
class VideoPopupLink extends React.Component {
  handleClick (){
    fullScreenVideoRef.current.fullscreenref.current.style.display = "block"
  }

  render(){
    return (
      <div id="video-popup-link">
        <button onClick={() => this.handleClick()} className='lead-icon-button'>
          <span>Посмотреть обращение</span>
        </button>
      </div>
    )
  }
}

class ShortBio extends React.Component {
  render(){
    return (
      <div id="short-bio">
        <Slogan top="Абоба —" bottom="кандидат от народа" />
        <GetInPromo />
      </div>
    )
  }
}

class GetInPromo extends React.Component {
  render(){
    return (
      <div id="get-in-promo">
        <div id="text-promo">
          <Info />
        </div>
        <div id="get-in-form">
          <Form />
        </div>
      </div>
    )
  }
}

class Info extends React.Component {
  render(){
    return (
      <>
        <p>
          Всем ку, меня зовут Валера Гладиатор и у меня от вас секретов
          нет: у меня маска и мне 15 лет.
        </p>
        <p>
          Я принял решение баллотироваться на пост президента от партии
          <span id="party"> Пожилая Ветка Сакуры</span> в 2024 году и
          прошу вас меня поддержать. Чтобы принять участие, необходимо
          собрать 54 228 подписей за один месяц. Подробнее о моей
          биографии читайте во вкладке
          <Link href='bio'><a className="pseudo-link"> Биография</a></Link>
        </p>
      </>
    )
  }
}

export default class Banner extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id="banner" className="press">
        <div id="banner--container">
          <VideoPopupLink />
          <FullScreenVideo ref={fullScreenVideoRef} />
          <ShortBio />
        </div>
      </div>
    )
  }
}