import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './layout/Hero'
import About from './layout/About'
import Portfolio from './layout/Portfolio'

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <div id="home">
          <Hero></Hero>
        </div>
        <div id="about">
          <About></About>
        </div>
        <div id="portfolio">
          <Portfolio></Portfolio>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
