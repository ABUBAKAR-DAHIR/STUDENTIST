import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { SiGithub, SiGoogle, SiLinkedin, SiX } from 'react-icons/si'
import { Element, Link as LinkScroll } from 'react-scroll'

const NavLink = ({title, to, onClick}) => (
  <LinkScroll to={to? to : title} onClick={onClick} spy smooth activeClass='text-p3' offset={-140} className='nav-li ml-4'>{title}</LinkScroll>
)

export default function Header() {
  let [isOpen, setOpen] = useState(false)
  let [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    function handleScroll(){
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
  })
  return (
    <Element name='header' className={clsx('fixed top-0 left-0 right-0 z-50 transition-all transform-content duration-500 ease-in-out ', scrolled ? 'bg-black-100 p-4 max-md:p-4 max-md:px-10' : 'py-14 max-md:p-10')}>
      <header className='relative flex items-center justify-center'>
        <div className='relative flex justify-around items-center md:container max-md:justify-between max-md:w-full'>
          <img src="logo.png" alt="logo" width={200} className='z-50 cursor-pointer' />
          {/* <p className={clsx('logo h5 z-50 mr-10', isOpen && 'pt-2')}>Studentist</p> */}
          <div className={clsx('w-[40%] max-xl:w-[50%] max-lg:w-[70%]', isOpen ? 'max-md:absolute max-md:-top-20 max-md:-left-10 max-md:-bottom-20  max-md:min-h-screen max-md:w-[2000vw] max-md:h-[2020vh] max-md:z-10 max-md:bg-s4' : 'max-md:hidden')}>
            <ul className={clsx('flex items-center justify-between  max-md:opacity-0 z-10 text-[20px]  ', isOpen && 'max-md:opacity-100 max-md:flex-col max-md:pt-70 max-md:items-start max-md:pl-10 max-md:text-[40px] max-md:absolute max-md:top-0  items-start')}>
              <NavLink title='features' onClick={() => setOpen(false)}/>
              <NavLink title='faq' onClick={() => setOpen(false)}/> 
              <NavLink title='testimonials' onClick={() => setOpen(false)}/>
              <NavLink title='contact us' to='contact' onClick={() => setOpen(false)}/>
            {
              isOpen && (
                 <div className='flex fixed bottom-20 gap-2 md:hidden'>
                    <span className='size-11 hover:size-12 hover:border-p1 group transition-all duration-100 flex items-center justify-center p-2 rounded-full border-2 border-s2'><SiGoogle className='icon' size={18}/></span>
                    <span className='size-11 hover:size-12 hover:border-p1 group transition-all duration-100 flex items-center justify-center p-2 rounded-full border-2 border-s2'><SiGithub className='icon' size={18}/></span>
                    <span className='size-11 hover:size-12 hover:border-p1 group transition-all duration-100 flex items-center justify-center p-2 rounded-full border-2 border-s2'><SiLinkedin className='icon' size={18}/></span>
                    <span className='size-11 hover:size-12 hover:border-p1 group transition-all duration-100 flex items-center justify-center p-2 rounded-full border-2 border-s2'><SiX className='icon' size={18}/></span>
                 </div>
              )
            }
            </ul>
          </div>
          <button className={clsx('md:hidden absolute top-10 right-10  cursor-pointer z-50')} onClick={() => setOpen(!isOpen)}>
            <div className={clsx('relative bars', isOpen && 'open')}/>
          </button>
        </div>
      </header>
    </Element>
  )
}
