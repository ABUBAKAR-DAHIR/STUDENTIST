import React, { useEffect, useState } from 'react'
import { Element, Link } from 'react-scroll'
import '../index.css'
import Button from '../components/Button'
import { ChevronRight } from 'lucide-react'
import "aos/dist/aos.css";
import Aos from 'aos'

export default function Hero() {
  let [active, setActive] = useState(false)
  useEffect(()=>{
    function handleTopIcon() {
      setActive(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleTopIcon)
  })

  useEffect(() => {
    Aos.init({ duration: 800 }); // animation duration in ms
  }, []);
  return (
    <section className='pt-70 min-h-screen'>
        <Element name='hero' className='relative'>
            <div className='pl-50 max-lg:pl-30 max-md:pl-10'>
                <h1 className='h2 max-w-xl mb-4 max-lg:max-w-lg max-md:max-w-388'>📚 All Your University Notes, One Place.</h1>
                <p className='body-1 max-w-512 text-p2 max-md:max-w-388'>Stop waiting for professors to send materials. With Studentist, students get instant access to notes anytime, anywhere.</p>
                <Button text="Get Started" />
            </div>
            <div className='absolute -top-20 right-30 img_resp -z-1'>
                <img src='/hero.svg' alt="hero" width={400} height={400}/>
            </div>

            {
              active && <Link to='hero' smooth offset={-300} data-aos='fade-right' className='fixed bottom-10 right-6 rotate-270 size-12 border-2 border-s8 bg-s2/50 rounded-xl flex items-center justify-center cursor-pointer z-50'>
              <ChevronRight />
            </Link>
            }
            
        </Element>
    </section>
  )
}
