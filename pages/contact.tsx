import React from "react"
import AppHead from "../data/AppHead"
import Header from "../components/Common/header"
import Footer from "../components/Common/footer"
import Contacts from "../components/contact"

export default class Bio extends React.Component {
  render() {
    return (
      <div>
        <AppHead />

        <Header />
        <Contacts />
        <Footer />
      </div>
    )
  }
}