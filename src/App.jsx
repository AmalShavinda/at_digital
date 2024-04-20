import Nav from '../src/components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import Questions from './sections/Questions.jsx'

function App() {

  return (
    <main className='max-container font-inter'>
      <section>
        <Nav/>
      </section>
      <section>
        <Hero/>
      </section>
      <section>
        <Services/>
      </section>
      <section>
        <Questions/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default App
