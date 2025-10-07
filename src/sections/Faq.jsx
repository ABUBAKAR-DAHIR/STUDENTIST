import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import { faq } from '../constants/FaqConstants'
import FaqItem from '../components/FaqItem'
import "aos/dist/aos.css";
import Aos from 'aos';

export default function Faq() {
    useEffect(() => {
        Aos.init({ duration: 800 }); // animation duration in ms
    }, []);

    let halflength = Math.floor(faq.length/2)
  return (
    <section data-aos='fade-up' duration={1000}>
        <Element name='faq'>
            <div className='container mx-auto'>
                <div className='pt-20 w-3xl mx-auto'>
                    <h1 className='h3 max-w-3xl mb-4 max-md:max-w-388'>Asking is always the right choice</h1>
                    <h1 className='text-2xl max-w-512 max-md:max-w-388'>Asking questions is your right, answering it is our duty</h1>
                </div>

                <div className='absolute left-0 w-full h-0.5 bg-s5 mt-20'/>

                <div className='relative md:container mx-auto px-10 mt-20 max-lg:px-0 max-md:px-10 max-sm:px-2' data-aos='fade-up'>
                    <div className='absolute left-[calc(50%)] w-0.5 h-full bg-s5 max-md:hidden'/>
                    <div className='h-10'/>
                    <div className='flex items-center justify-around px-10 max-md:block max-lg:px-0'>
                        <div className='md:flex-1 md:mr-5'>
                            {
                                faq.slice(0, halflength).map((item)=>(
                                    <FaqItem key={item.id} item={item}/>
                                ))
                            }
                        </div>
                        <div className='md:flex-1 md:ml-5'>
                            {
                                faq.slice(halflength).map((item)=>(
                                    <FaqItem key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='absolute left-0 w-full h-0.5 bg-s5 mb-20 -z-1'/>

            </div>
        </Element>
    </section>
  )
}
