import React from 'react'
import Link from 'next/link'
import CommentsBanner from './Comments/comments-banner'
import PeopleComments from './Comments/people-comments'
import SupportWidget from './Common/supportwidget'

export default class Contacts extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <main>
        <CommentsBanner />
        <PeopleComments />
        <SupportWidget />
      </main>
    )
  }
}