import React, { useEffect, useState } from 'react'
import { SparklesCore } from '../components/SparklesCore'
import { Element } from 'react-scroll'
import { Send } from 'lucide-react'
import "aos/dist/aos.css";
import Aos from 'aos';
import clsx from 'clsx';



export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 800 }); // animation duration in ms
    }, []);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [responseMsg, setResponseMsg] = useState("")

    useEffect(()=>{
        if(responseMsg) {
            let timer = setTimeout(() => {
                responseMsg && setResponseMsg("")
            }, 3000);
    
            return () => clearTimeout(timer)
        }
    }, [responseMsg])

    const handleSubmit = async (e) => {
        console.log("submitted before")
        e.preventDefault()
        console.log("submitted after")
        if (!name || !email || !message) {
            setResponseMsg("Please fill in all fields")
            return
        }

        try {
            const res = await fetch("https://studentist-backend.onrender.com/api/sendMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            })

            const data = await res.json()

            if (res.ok) {
                setResponseMsg(data.message || "Message sent successfully")
                setName(""); setEmail(""); setMessage("")
            } else {
                setResponseMsg(data.error || "Something went wrong")
            }
        } catch (error) {
            console.error(error)
            setResponseMsg("Server error")
        }
    }

  return (
    <section className='p-10 max-[550px]:p-2'>
        <Element name='contact' className='container mx-auto pt-10 mb-10 '>
            <div className='g5 rounded-7xl border-2 border-s10 py-8 px-6 max-[550px]:py-3'>
                <div className='relative'>
                    <SparklesCore
                        particleColor="#9CECC9"
                        particleDensity={300}
                        className="absolute inset-0 pointer-events-none"
                    />
                    <form onSubmit={handleSubmit} className='relative flex justify-around items-center transition-all duration-500'>
                        <div className="relative w-[60%] max-lg:w-full">
                            <h1 className='text-center py-4 text-3xl capitalize'>contact us</h1>
                            <div className='flex justify-between pb-4 max-md:flex-col'>
                                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'  className='bg-s9/75 w-full p-3 pl-5 text-md text-s2 outline-none rounded-2xl max-md:mb-4'/>
                                <div className='w-20 max-md:hidden'/>
                                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email' className='bg-s9/75 w-full p-3 pl-5 text-md text-s2 outline-none rounded-2xl'/>
                            </div>
                            <textarea name="message" id="" cols="20" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message..' className='bg-s9/75 block w-full p-3 pl-5 text-md text-s2 outline-none rounded-2xl resize-none'></textarea>
                           
                            <div className={clsx('transition-all duration-500 ease-in-out', responseMsg? 'max-h-40 opacity-100' : 'max-h-0 opacity-0')}>
                                <p className='text-center mt-2 '>{responseMsg}</p>
                            </div>

                            <button type='submit' className="bg-amber-400 hover:bg-amber-600 transition-colors duration-500 p-6 text-p1 capitalize text-center my-4 rounded-3xl w-full text-xl cursor-pointer group flex items-center justify-center gap-2 overflow-hidden">
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
