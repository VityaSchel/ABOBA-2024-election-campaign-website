import React from 'react'
import Image from 'next/image'
import Donaters from './donaters'

class Person extends React.Component {
  render(){
    return (
      <div className="contact-person">
        <Image src={this.props.avatar} width="70px" height="70px"
               alt={this.props.alt ?? this.props.name}/>
        <div className="person-info">
          <h4>{this.props.name}</h4>
          <span className="person-note">{this.props.note}</span>
          {this.props.children}
        </div>
      </div>
    )
  }
}

class ContactPersons extends React.Component {
  render(){
    return (
      <div id="contact-flex">
        <div id="contact-left-col">
          <h3 className="primary-heading">Контакты пресс-службы</h3>
        </div>
        <div id="contact-right-col">
          <Person name="Абоба" note="Руководитель ФБК (Фонд Борьбы с Кролями)" avatar="/images/aboba-avatar.png">
            <a href="mailto:gladikotv@gmail.com" className="pseudo-link">gladikotv@gmail.com</a>
          </Person>
          <Person name="Затуп Спермакин" alt="Свинья" note="Никогда не отвечает на сообщения" avatar="/images/citinez-avatar.png">
            <a href="mailto:menegvalakas@gmail.com" className="pseudo-link">menegvalakas@gmail.com</a>
          </Person>
        </div>
      </div>
    )
  }
}

class ContactInfo extends React.Component {
  render(){
    return (
      <div id="get-in-promo">
        <h1 className="primary-heading">Для СМИ</h1>
        <div id="text-promo">
          <p>
            Пресс-служба проводит брифинги для журналистов когда попало,
            расписания у деда нет, он лентяй и вообще Абоба цокнулся и
            проводит стримы 3 раза в месяц.
          </p>
          <p>
            Прямые эфиры у создателя сайта никогда не проходили и не проходят,
            а на ваши вопросы я отвечу бесплатно!
            <a href="mailto:vityaschel@utidteam.com" className="pseudo-link"> vityaschel@utidteam.com</a>
          </p>
          <p>
            Образ Абобы принадлежит
            <a href="https://www.youtube.com/channel/UC64Cl4Cl-3ebfr1U-3BVFOQ"
              rel="nofollow noreferrer noopener" target="_blank"
              className="pseudo-link"> каналу «НУ, ДОБРЕНЬКО!»</a>.
            Используется с разрешения автора.
          </p>
        </div>
        <hr></hr>
        <Donaters />
        <hr></hr>
        <div id="text-promo">
          <ContactPersons />
        </div>
      </div>
    )
  }
}

export default class ContactBanner extends React.Component {
  render(){
    return (
      <div id="banner" className="puregray">
        <div id="banner--container" className="super-shrink">
          <ContactInfo />
        </div>
      </div>
    )
  }
}