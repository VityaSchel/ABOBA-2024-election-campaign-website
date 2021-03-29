import React from 'react'
import Link from 'next/link'
import slidesData from '../../data/comments'

class Person extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div className="contact-person">
        <img src={this.props.avatar} alt={this.props.alt ?? this.props.name}/>
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
  constructor (props){
    super(props);
  }

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

class CommentText extends React.Component {
  render(){
    return (
      <p>{this.props.children.includes('%link%')?
            (
              <>
                {this.props.children.replace(/%link%/, '')}
                <Link href='https://change.org/p/денис-сухачев-спасти-соню-от-живодера-александра-citinez-семакина'>
                  <a className='pseudo-link' target="_blank">#СОНЯЖИВИ</a>
                </Link>
              </>
            )
            :
            (
              this.props.children.includes('@ProbablyKrolBot')?
              <>
                {this.props.children.replace(/@ProbablyKrolBot/, '')}
                <Link href="https://t.me/ProbablyKrolBot">
                  <a className="pseudo-link" target="_blank">@ProbablyKrolBot</a>
                </Link>
              </>
              :
              this.props.children
            )
          }</p>
    )
  }
}

class Comments extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    const comments = slidesData.map(comment => {
      return (
        <div className="comment-block">
          <div className="comment-content">
            <img src={comment.avatar} alt="Фотография избирателя" className="comment-avatar"/>
            <div className="comment-text">
              <h3 className="comment-name primary-heading">{comment.name}</h3>
              <h4 className="primary-heading">{comment.position}</h4>
              <CommentText>{comment.comment}</CommentText>
            </div>
          </div>
        </div>
      )
    })

    return (
      <>
        {comments}
      </>
    )
  }
}

export default class PeopleComments extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div id="people-comments">
        <Comments />
      </div>
    )
  }
}