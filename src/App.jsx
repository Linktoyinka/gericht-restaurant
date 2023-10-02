import { useState } from 'react'
import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu, Footer } from './containers'
import { Navbar } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  )
}

export default App
