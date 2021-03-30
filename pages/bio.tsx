import React from "react"
import AppHead from "../data/AppHead"
import Header from "../components/Common/header"
import Footer from "../components/Common/footer"
import Biography from "../components/biography"

export default class Bio extends React.Component {
  render() {
    return (
      <div>
        <AppHead />

        <Header />
        <Biography />
        <Footer />
      </div>
    )
  }
}