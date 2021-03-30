import React from 'react'
import AppHead from '../data/AppHead'
import Header from '../components/Common/header'
import Footer from '../components/Common/footer'
import BannerErrorPage from '../components/ErrorPage/banner-error-page'

export default class Page404 extends React.Component {
  render(){
    return (
      <main>
        <Header />
        <BannerErrorPage code={404} label={['Страница', 'не существует']} />
        <Footer />
      </main>
    )
  }
}