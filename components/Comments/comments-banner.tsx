import React from 'react'
import Form from '../Common/form'

class ContactInfo extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div id="get-in-promo" className="comments-banner">
        <h1 className="primary-heading">Базовые пункты предвыборной программы Абобы</h1>
        <div id="text-promo">
          <p>
            Прочитайте базовые тезисы программы Абобы и поделитесь в соцсетях теми,
            с которыми вы больше всего согласны — или больше всего не согласны.
            Оставьте свою электронную почту, чтобы поддержать выдвижение Абобы.
          </p>
        </div>
        <div id="get-in-form">
          <Form />
        </div>
      </div>
    )
  }
}

export default class PeopleComments extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div id="banner" className="europecity">
        <div id="banner--container" className="super-shrink">
          <ContactInfo />
        </div>
      </div>
    )
  }
}