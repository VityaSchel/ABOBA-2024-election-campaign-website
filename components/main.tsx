import React from 'react'
import Link from 'next/link'
import Banner from './MainPage/banner'
import Articles from './MainPage/articles'
import SupportWidget from './Common/supportwidget'
import Slider from './MainPage/slider'

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