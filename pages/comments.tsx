import AppHead from '../data/AppHead'
import Header from '../components/Common/header'
import Footer from '../components/Common/footer'
import Comments from '../components/comments'

export default function Bio(): JSX.Element {
  return (
    <div>
      <AppHead />

      <Header />
      <Comments />
      <Footer />
    </div>
  )
}