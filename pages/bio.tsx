import AppHead from '../data/AppHead'
import Header from '../components/Common/header'
import Footer from '../components/Common/footer'
import Biography from '../components/biography'

export default function Bio(): JSX.Element {
  return (
    <div>
      <AppHead />

      <Header />
      <Biography />
      <Footer />
    </div>
  )
}