import React from 'react'
import AppHead from '../data/AppHead'
import Header from '../components/Common/header'
import Footer from '../components/Common/footer'
import BannerErrorPage from '../components/ErrorPage/banner-error-page'

export default class Page404 extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <main>
        <Header />
        <BannerErrorPage code={500} label={['Ошибка', 'на сервере']} />
        <Footer />
      </main>
    )
  }
}