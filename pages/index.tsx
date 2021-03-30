import React from "react"
import AppHead from "../data/AppHead"
import Header from "../components/Common/header"
import Footer from "../components/Common/footer"
import Main from "../components/main"

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <AppHead />

        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
