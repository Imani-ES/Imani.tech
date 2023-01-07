import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Exp from './components/exp/Exp'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav />
        <About />
        <Contact/>
        <Exp/>
        <Footer/>

    </>
  )
}

export default App