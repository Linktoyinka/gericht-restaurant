import { useState } from 'react'
import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from './containers'
import { Navbar, Footer } from './components'
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
