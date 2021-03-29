import React from 'react'
import Form from '../Common/form'
import Slogan from '../Common/slogan'

class LongBioText extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div id="get-in-promo">
        <div id="text-promo">
          <p>
            Абоба – кандидат от народа, юрист, основатель фонда борьбы с кролями.
            Он помогает жителям Самары и соседних регионов: раздает балтику, чинит
            жигули и совершает много других дел. О них вы можете прочитать ниже.
          </p>
        </div>
        <div id="get-in-form">
          <Form />
        </div>
      </div>
    )
  }
}

class LongBio extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div id="long-bio">
        <Slogan top="Кто такой" bottom="АБОБА" />
        <LongBioText />
      </div>
    )
  }
}

export default class BioBanner extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div id="banner" className="family">
        <div id="banner--container" className="shrink">
          <LongBio />
        </div>
      </div>
    )
  }
}