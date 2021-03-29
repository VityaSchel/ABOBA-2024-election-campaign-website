import React from 'react'

export default class Form extends React.Component {
  constructor (props){
    super(props);

    this.mail = React.createRef()
    this.submit = React.createRef()
  }

  handleSubmit(event): void {
    event.preventDefault()
    this.mail.current.setAttribute('disabled', 'disabled')
    this.submit.current.setAttribute('disabled', 'disabled')
    this.submit.current.innerText = 'Готово'
  }

  render(){
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="email" name='email' placeholder="Ваша электронная почта"
               required ref={this.mail} autocomplete='on' autocompletetype='email'/>
        <button type="submit" ref={this.submit} className="glow-button">Зарегистрироваться</button>
      </form>
    )
  }
}