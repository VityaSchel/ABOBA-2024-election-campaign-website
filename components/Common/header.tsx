import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import scrollIntoView from 'scroll-into-view-if-needed'
import Hamburger from 'hamburger-react'
import { useTransition, animated } from "react-spring"
import useComponentSize from '@rehooks/component-size'

function MobileHamburger(): React.Component {
  const menuRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // | единственная причина, по которой мы вынуждены
  // V использовать функциональный компонент
  const menuHeight = useComponentSize(menuRef).height;
  let currentHeight = 0;

  function toggleMenu(): void {
    setVisible(!visible)
  }

  return (
    <>
      <button onClick={toggleMenu} className="button-transparent" id="menu-mobile-icon">
        <Hamburger rounded color="#0d7fa3"/>
      </button>
      <div id="float-menu" style={{ height: visible ? menuHeight+'px' : '0px' }}>
        <div ref={menuRef}>
          <Links />
        </div>
      </div>
    </>
  )
}

class Logo extends React.Component {
  render(){
    return (
      <Link href="/">
        <a>
          <Image src="/images/aboba-logo.svg" width="170px" height="40px"
                 id="logo" alt="Логотип АБОБА"/>
        </a>
      </Link>
    )
  }
}

interface ILinksInterface {
  href: string;
  children: string;
}

class NavLink extends React.Component<ILinksInterface> {
  render(){
    return (
      <Link href={this.props.href}>
        <a className="toplink button-color-transition">{this.props.children}</a>
      </Link>
    )
  }
}

class Links extends React.Component {
  render(){
    return (
      <div id="top-nav">
        <NavLink href='bio'>Биография</NavLink>
        <NavLink href='comments'>Избиратели</NavLink>
        <NavLink href='zyabls'>Зяблам</NavLink>
        <NavLink href='contact'>Для сми</NavLink>
      </div>
    )
  }
}

class Button extends React.Component {
  handleClick(): void {
    scrollIntoView(document.querySelector('#support-widget'), {
      behavior: 'smooth',
      scrollMode: 'if-needed',
      block: 'start',
      inline: 'nearest',
    })
  }

  render(){
    return (
      <button id="support" className="toplink button-bg-transition" onClick={() => this.handleClick()}>Поддержать</button>
    )
  }
}

export default class Header extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <header>
        <nav>
          <div id="left-side">
            <Logo />
            <Links />
          </div>
          <div id="right-side">
            <Button />
          </div>
          <MobileHamburger />
        </nav>
      </header>
    )
  }
}