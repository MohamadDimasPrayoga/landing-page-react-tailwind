import React from 'react'
import { Mitra, Navbar } from './components'
import Hero from './components/Hero'
import "./App.css"
import Service from './components/Service'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mitra />
      <Service />
      <About />
    </div>
  )
}

export default App