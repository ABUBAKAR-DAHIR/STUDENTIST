import React, { useEffect, useState } from 'react'
import { Element, Link } from 'react-scroll'
import '../index.css'
import Button from '../components/Button'
import { ChevronRight } from 'lucide-react'
import "aos/dist/aos.css";
import Aos from 'aos'

export default function Hero() {
  let [active, setActive] = useState(false)
  let [scrollProgress, setScrollProgress] = useState(0)
  useEffect(()=>{
    function handleTopIcon() {
      let docHeight = document.body.scrollHeight - window.innerHeight
      let progress = (window.scrollY / docHeight ) * 100
      setScrollProgress(progress)
      setActive(window.scrollY > 100)
    }
    
    handleTopIcon()
    window.addEventListener('scroll', handleTopIcon)
    return () => window.removeEventListener('scroll', handleTopIcon)
  }, [])

  useEffect(() => {
    Aos.init({ duration: 800 }); // animation duration in ms
  }, []);
  return (
    <section className='pt-70 min-h-screen max-md:pt-50'>
        <Element name='hero' className='relative'>
            <div className='pl-50 max-lg:pl-30 max-md:pl-10'>
                <h1 className='h2 max-w-xl mb-4 max-lg:max-w-lg max-md:max-w-388'>📚 All Your University Notes, One Place.</h1>
                <p className='body-1 max-w-512 text-p2 max-md:max-w-388'>Stop waiting for professors to send materials. With Studentist, students get instant access to notes anytime, anywhere.</p>
                <Button text="Get Started" />
            </div>
            <div className='absolute -top-20 right-30 img_resp -z-1'>
                <img src='/hero.svg' alt="hero" width={400} height={400}/>
            </div>

            {/* {
              active && <Link to='hero' smooth offset={-300} data-aos='fade-right' className='fixed bottom-10 right-6 rotate-270 size-12 border-2 border-p1 bg-s2/50 rounded-xl flex items-center justify-center cursor-pointer z-50'>
                            <ChevronRight />
                        </Link>
            } */}

             {
              active && (
                <Link to='hero' smooth offset={-300} data-aos='fade-right' className='fixed bottom-10 right-6 rotate-270 size-12 border-4 border-transparent bg-s2/50 rounded-xl flex items-center justify-center cursor-pointer z-50'>
                  <div className='relative '>
                    <svg className="absolute -top-6  -left-3" width="48" height="48" viewBox="0 0 48 48">
                         <rect
                            x="3"
                            y="3"
                            width="42"
                            height="42"
                            rx="8"
                            ry="8"
                            stroke="#F1F3E8"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray={168} // perimeter
                            strokeDashoffset={168 - (168 * scrollProgress) / 100}
                            style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
                          />
                    </svg>
                  </div>
                  <ChevronRight />
                </Link>
            )}

            
        </Element>
    </section>
  )
}
