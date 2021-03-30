import React from "react"
import Banner from "./MainPage/banner"
import Articles from "./MainPage/articles"
import SupportWidget from "./Common/supportwidget"
import Slider from "./MainPage/slider"

export default class Main extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <main>
        <Banner />
        <Articles />
        <Slider />
        <SupportWidget />
      </main>
    )
  }
}