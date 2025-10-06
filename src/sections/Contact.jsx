import React, { useEffect } from 'react'
import { SparklesCore } from '../components/SparklesCore'
import { Element } from 'react-scroll'
import { Send } from 'lucide-react'
import "aos/dist/aos.css";
import Aos from 'aos';


export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 800 }); // animation duration in ms
    }, []);
  return (
    <section className='p-10'>
        <Element name='contact' className='container mx-auto mt-25 mb-10'>
            <div className='g5 rounded-7xl border-2 border-s10 py-8 px-6'>
                <div className='relative'>
                    <SparklesCore
                        particleColor="#9CECC9"
                        particleDensity={300}
                        className="absolute inset-0 pointer-events-none"
                    />
                    <form action="" className='relative flex justify-around items-center'>
                        <div className="relative w-[60%] max-lg:w-full">
                            <h1 className='text-center py-4 text-3xl capitalize'>contact us</h1>
                            <div className='flex justify-between pb-4 max-md:flex-col'>
                                <input type="text" name="name" id="name" placeholder='Name'  className='bg-s9/75 w-full p-3 pl-5 text-md text-s2 outline-none rounded-2xl max-md:mb-4'/>
                                <div className='w-20 max-md:hidden'/>
                                <input type="email" name="email" id="email"  placeholder='Email' className='bg-s9/75 w-full p-3 pl-5 text-md text-s2 outline-none rounded-2xl'/>
                            </div>
                            <textarea name="message" id="" cols="20" rows="10" placeholder='Message..' className='bg-s9/75 block w-full p-3 pl-5 text-md text-s2 outline-none rounded-2xl resize-none'></textarea>
                            <button className="bg-amber-400 hover:bg-amber-600 transition-colors duration-500 p-6 text-p1 capitalize text-center my-4 rounded-3xl w-full text-xl cursor-pointer group flex items-center justify-center gap-2 overflow-hidden">
                                <p className='transform translate-x-4 opacity-100 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500'>send message</p>
                                <Send
                                    className="transform translate-x-0 opacity-0 group-hover:translate-x-4 group-hover:opacity-100 transition-all duration-500"
                                />
                            </button>

                        </div>
                        <div data-aos='fade-left' duration={10000} className='w-[30%] max-lg:hidden'>
                            <img src='/contact/contact.png' alt="" className='object-contain -translate-x-10 rotate-12'/>
                        </div>
                    </form>
                </div>
            </div>
        </Element>
    </section>
  )
}
