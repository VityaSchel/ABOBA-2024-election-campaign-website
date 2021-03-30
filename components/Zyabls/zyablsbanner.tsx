import React from 'react'
import Form from '../Common/form'

class ZyablsInfo extends React.Component {
  render(){
    return (
      <div id="get-in-promo">
        <h1 className="primary-heading">Как помочь Абобе?</h1>
        <div id="text-promo">
          <p>
            Мы начинаем кампанию за допуск Абобы на выборы президента. Это будет
            сложная и интересная кампания. Если хотите ей помочь – подписывайтесь
            на канал с гадзами в телеграме!
          </p>
        </div>
        <div id="get-in-form">
          <Form />
        </div>
      </div>
    )
  }
}

export default class ZyablsBanner extends React.Component {
  render(){
    return (
      <div id="banner" className="krolik">
        <div id="banner--container" className="shrink">
          <ZyablsInfo />
        </div>
      </div>
    )
  }
}