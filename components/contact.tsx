import React from "react"
import ContactBanner from "./Contact/contactbanner"
import SupportWidget from "./Common/supportwidget"

export default class Contacts extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <main>
        <ContactBanner />
        <SupportWidget />
      </main>
    )
  }
}