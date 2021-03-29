import React from 'react'
import Link from 'next/link'
import Banner from '../components/MainPage/banner'
import Articles from '../components/MainPage/articles'
import SupportWidget from '../components/Common/supportwidget'
import Slider from '../components/MainPage/slider'

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