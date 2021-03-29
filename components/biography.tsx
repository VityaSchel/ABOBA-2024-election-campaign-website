import React from 'react'
import Form from './Common/form'
import SupportWidget from './Common/supportwidget'
import Timeline from './Biography/timeline'
import BioBanner from './Biography/bio-banner'
import PublicRibbon from './Biography/public-ribbon'

export default class Biography extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <main>
        <BioBanner />
        <PublicRibbon />
        <Timeline />
        <SupportWidget />
      </main>
    )
  }
}