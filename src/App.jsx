import React from 'react'
import { Mitra, Navbar } from './components'
import Hero from './components/Hero'
import "./App.css"
import Service from './components/Service'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mitra />
      <Service />
    </div>
  )
}

export default App