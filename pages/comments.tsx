import React, { Component } from "react"
import AppHead from "../data/AppHead"
import Header from "../components/Common/header"
import Footer from "../components/Common/footer"
import Comments from "../components/comments"

export default class Bio extends Component {
  render(): void {
    return (
      <div>
        <AppHead />

        <Header />
        <Comments />
        <Footer />
      </div>
    )
  }
}