import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Countdown from "./components/Countdown"
import Purpose from "./components/Purpose"
import Expectation from "./components/Expectation"
import Gallery from "./components/Gallery"
import Ticket from "./components/Ticket"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <hr className="border-t-2 border-border-dark mt-15 dark:border-gold-dark" />
      <Countdown />
      <div id="purpose">
        <Purpose />
      </div>
      <Expectation />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="ticket">
        <Ticket />
      </div>
      <hr className="border-t-6 border-border-dark mt-15 dark:border-gold-dark" />
      <Footer />
    </div>
  )
}

export default App
