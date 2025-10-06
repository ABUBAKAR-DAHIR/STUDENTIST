import React from 'react'
import Header from './sections/Header'
import './index.css'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
import Companies from './sections/Companies'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <main className='min-w-[450px]'>
      <Header />
      <Hero />
      <Features />
      <Faq />
      <Testimonials />
      <Companies />
      <Contact />
      <Footer />
    </main>
  )
}
