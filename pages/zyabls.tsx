import AppHead from '../data/AppHead'
import Header from '../components/Common/header'
import Footer from '../components/Common/footer'
import Zyabls from '../components/zyabls'

export default function Bio(): JSX.Element {
  return (
    <div>
      <AppHead />

      <Header />
      <Zyabls />
      <Footer />
    </div>
  )
}