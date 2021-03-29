import AppHead from '../data/AppHead'
import Header from '../components/Common/header'
import Footer from '../components/Common/footer'
import Contacts from '../components/contact'

export default function Bio(): JSX.Element {
  return (
    <div>
      <AppHead />

      <Header />
      <Contacts />
      <Footer />
    </div>
  )
}