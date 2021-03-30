import React from "react"
import Link from "next/link"
import slidesData from "../../data/comments"

class CommentText extends React.Component {
  render(){
    return (
      <p>{this.props.children.includes("%link%")?
        (
          <>
            {this.props.children.replace(/%link%/, "")}
            <Link href='https://change.org/p/денис-сухачев-спасти-соню-от-живодера-александра-citinez-семакина'>
              <a className='pseudo-link' target="_blank">#СОНЯЖИВИ</a>
            </Link>
          </>
        )
        :
        (
          this.props.children.includes("@ProbablyKrolBot")?
            <>
              {this.props.children.replace(/@ProbablyKrolBot/, "")}
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
  render(){
    const comments = slidesData.map(comment => {
      return (
        <div className="comment-block" key={comment.id}>
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
  render(): void {
    return (
      <div id="people-comments">
        <Comments />
      </div>
    )
  }
}