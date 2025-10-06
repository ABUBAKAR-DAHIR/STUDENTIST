import React from 'react'
import Header from './sections/Header'
import './index.css'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
  import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <main className='min-w-[450px] overflow-clip'>
      <Header />
      <Hero />
      <Features />
      <Faq />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
