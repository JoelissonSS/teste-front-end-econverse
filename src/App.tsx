
import { Banner } from './components/home/banner/banner'
import { Brands } from './components/home/brands'
import { Footer } from './components/home/footer'
import { Header } from './components/home/header/index'
import { MenuCategories } from './components/home/menuCategories'
import { Newsletter } from './components/home/newsletter'
import { Partners } from './components/home/partners'
import { Showcase } from './components/home/showcase'

function App() {
  

  return (
    <>
    <Header />
    <Banner />
    <MenuCategories />
    <Showcase subContent='menuProducts'/>
    <Partners />
    <Showcase subContent='subtitle'/>
    <Partners />
    <Brands />
    <Showcase subContent='subtitle'/>
    <Newsletter />
    <Footer />
    </>
  )
}

export default App
