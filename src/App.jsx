import React from 'react'
import { Feedback, Mitra, Navbar } from './components'
import Hero from './components/Hero'
import "./App.css"
import Service from './components/Service'
import About from './components/About'
import Cta from './components/Cta'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mitra />
      <Service />
      <About />
      <Feedback />
      <Cta />
      <Footer />
    </div>
  )
}

export default App