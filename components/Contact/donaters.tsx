import React from "react"
import Link from "next/link"
// import donaters from "../../data/donaters.tsx"

class Donate extends React.Component {
  render(){
    return (
      <div className="aboba-donate">
        <span className="donate-name">{this.props.don.name}</span>
        <span className="donate-amount">{this.props.don.amount}</span>
        <p className="donate-message">{this.props.don.message}</p>
        {this.props.don.link === undefined?<></>:
          <Link href={this.props.don.link.href}>
            <a className='pseudo-link' target="_blank" rel="nofollow noopener noreferrer">
              {this.props.don.link.label}
            </a>
          </Link>}
      </div>
    )
  }
}

export default class Donaters extends React.Component {
  constructor(props) {
    super(props)
    this.state = { donaters: null }
  }

  componentDidMount() {
    (async () => {
      const response = await fetch('https://hloth.dev/api/getAbobaDons')
      const dons = await response.text()
      const donaters = dons.split('\n').filter(String).map(don => {
        const dons = don.split(':', 4)
        return {
          id: dons[0],
          name: dons[0],
          amount: dons[1] + ' Евро',
          message: dons[2],
          link: dons[3] ? {
            href: 'https://instagram.com/' + dons[3],
            label: 'Инстаграм: @' + dons[3]
          } : undefined
        }
      })
      this.setState({ donaters })
    })()
  }

  render(){
    const donates = this.state.donaters?.map(don => <Donate don={don} key={don.id} />)
    
    return (
      <div id="aboba-donaters">
        <h3 className="primary-heading">Донатеры сайта Абобы</h3>
        {donates ?? 'Загрузка...'}
      </div>
    )
  }
}