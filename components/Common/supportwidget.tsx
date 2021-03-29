import React from 'react'

class Tab extends React.Component {
  constructor (props){
    super(props);

    this.ref = React.createRef()
  }

  enable(): void {
    this.ref.current.style.display = ''
  }

  disable(): void {
    this.ref.current.style.display = 'none'
  }

  render(){
    return (
      <div className="switch-tab-content" for={this.props.for} ref={this.ref}
        style={this.props.selected?{}:{display: 'none'}}>
        <div>
          <h2 className="primary-heading">{this.props.heading}</h2>
          {this.props.children}
        </div>
        <div className="action-button">
          <a className="glow-button" href={this.props.link.href} target="_blank">{this.props.link.label}</a>
        </div>
      </div>
    )
  }
}

interface ITabButton {
  tab: string;
  e: void;
  selected?: boolean;
  children: string;
}

class TabButton extends React.Component {
  constructor (props){
    super(props);

    this.ref = React.createRef()
  }

  enable(): void {
    this.ref.current.classList.add('selected')
  }

  disable(): void {
    this.ref.current.classList.remove('selected')
  }

  render(){
    return (
      <button className={"switch-tab-button" + (this.props.selected ? " selected" : "")}
        id={this.props.tab} onClick={e => this.props.e(e)} ref={this.ref}>
        {this.props.children}
      </button>
    )
  }
}

class TabSwitcher extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      selected: 'gadza-online-tab'
    }

    this.switcher = React.createRef()
    this.tabButtons = Array(4).fill().map(() => React.createRef())
    this.tabs = Array(4).fill().map(() => React.createRef())
  }

  handleClick(e): void {
    const newTabId = e.currentTarget.id
    this.setState({selected: newTabId}, () => {
      this.tabButtons.forEach((tabRef, refIndex) => {
        if(tabRef.current.props.tab == newTabId){
          tabRef.current.enable()
          this.tabs[refIndex].current.enable()
        } else {
          console.log(tabRef.current)
          tabRef.current.disable()
          this.tabs[refIndex].current.disable()
        }
      })
    })
  }

  render(){
    return (
      <div id="switcher" ref={this.switcher}>
        <div id="switcher-tabs">
          <TabButton tab="gadza-online-tab" selected e={e => this.handleClick(e)} ref={this.tabButtons[0]}>Сайт гадзы.online</TabButton>
          <TabButton tab="gadza-telega-tab" e={e => this.handleClick(e)} ref={this.tabButtons[1]}>Сайт гадзы.online</TabButton>
          <TabButton tab="aboba-domain-tab" e={e => this.handleClick(e)} ref={this.tabButtons[2]}>Мне на домен абобы</TabButton>
          <TabButton tab="aboba2024-github" e={e => this.handleClick(e)} ref={this.tabButtons[3]}>Абоба 2024 — GitHub</TabButton>
        </div>
        <Tab for="gadza-online-tab" heading='Сайт-коллекция гадз'
             link={{label: 'Перейти', href: 'https://гадзы.online'}} selected ref={this.tabs[0]}>
          <p>
            Сайт-коллекция «гадз» Глада Валакаса появился 20 февраля 2020 года.
            2 августа 2020 его посетил сам Валерий. 20 февраля 2021 сайт обновился
            и теперь можно скачивать любые гадзы под лицензий CC-BY-4.0.
          </p>
        </Tab>
        <Tab for="gadza-telega-tab" heading='Канал с гадзами в телеграме'
             link={{label: '@gadzas', href: 'https://t.me/gadzas'}} ref={this.tabs[1]}>
          <p>
            Телеграм канал с гадзами, появившийся после крупного обновления
            сайта-коллекции «гадз» Глада Валакаса 20 февраля 2020, публикует
            обновления сайта и новости, касающиеся Валеры Гладиатора.
          </p>
        </Tab>
        <Tab for="aboba-domain-tab" heading='Сделайте пожертвование'
             link={{label: 'Пожертвовать', href: 'https://streamgum.com/vityaschel'}} ref={this.tabs[2]}>
          <p>
            Сайт предвыборной кампании Абобы нуждается в вашей поддержке!
            Ежегодно я трачу тысячи рублей на продление жизни таким проектам
            как сайт с гадзами, бот Шевцова и других, не вставляя
            на сайты рекламу.
          </p>
        </Tab>
        <Tab for="aboba2024-github" heading='Открытый код сайта'
             link={{label: 'ABOBA2024', href: 'https://github.com/VityaSchel/ABOBA-2024-election-campaign-website'}} ref={this.tabs[3]}>
          <p>
            Я буду вам благодарен за любой вклад в разработку сайта! Не
            стесняйтесь исправлять ошибки, добавлять новые страницы и
            делать рефакторинг кода. Сайт написан на Next.JS с React и
            его исходный код сейчас находится на GitHub.
          </p>
        </Tab>
      </div>
    )
  }
}

export default class SupportWidget extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div id="support-widget">
        <div id="support-widget-inner">
          <h3 id="support-widget-heading">Поддержи кампанию по выдвижению АБОБЫ в президенты</h3>
          <TabSwitcher />
        </div>
      </div>
    )
  }
}