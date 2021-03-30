import React from "react"

export default class Footer extends React.Component {
  render(): void {
    return (
      <footer>
        <div id="footer-info">
          <div id="contacts">
            <p>© 2021-2024 АБОБА</p>
            <a href="mailto:gadza1488@гадзы.online" className="pseudo-link">gadza1488@гадзы.online</a>
          </div>
          <div id="note">
            <p>
                Сайт сделан в память о пожилом воине донбасса Валере, умершем в 2016 году под давлением шкилы,
                на замену которому пришел пенчик и бесконечные слеты маски.
            </p>
            <p>
                Когда-нибудь саша citinez обязательно скинет деду сайт для заказа рофл-звонков...
            </p>
          </div>
        </div>
      </footer>
    )
  }
}