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
<<<<<<< HEAD
      </main>    
=======
      </main>
>>>>>>> 44290d18c6d7b11a41c438298e67b8231b7cd8e2
      <Footer></Footer>
    </>
  )
}
