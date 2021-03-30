import React from "react"
import ZyablsBanner from "./Zyabls/zyablsbanner"
import SupportWidget from "./Common/supportwidget"
import GalleryRibbon from "./Common/galleryribbon"

class ZyablsInfo extends React.Component {
  render(){
    return (
      <div id="zyabls">
        <div id="zyabls-content">
          <h2 className="primary-heading">Кто такие зяблы деда?</h2>
          <p>
            SCP-14228 B – это жертва длительного контакта с SCP-14228 A.
            Объект А имеет способность навязывать свой стиль речи людям
            которые находятся в длительном контакте с SCP-14228. После
            того как жертва SCP-14228 начинает говорить как субъект, она
            превращается в так называемого &quot;ЗЯБЛА&quot;. Зябл повторяет действия
            субъекта в течении 24 часов после чего умирает.
          </p>
          <GalleryRibbon />
          <p>
            Абоба нуждается в вашей поддержке по всей России.
            Приглашайте друзей на канал Абобы, чтобы не пропустить начало кампании.
          </p>
        </div>
      </div>
    )
  }
}

export default class Zyabls extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <main>
        <ZyablsBanner />
        <ZyablsInfo />
        <SupportWidget />
      </main>
    )
  }
}