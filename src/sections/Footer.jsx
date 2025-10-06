import { Zap } from 'lucide-react'
import React from 'react'
import { SiGithub, SiGoogle, SiLinkedin, SiX } from 'react-icons/si'

export default function Footer() {
  return (
    <section className='mt-10 pt-10 container mx-auto'>
        <div className='relative py-8 pb-20 overflow-clip pt-10 px-40 max-lg:px-10 g6 border-2 border-s7 rounded-4xl mx-auto flex lg:min-h-[300px] max-lg:flex-col '>
            <div>
                <h1 className='mb-6 max-lg:text-center cursor-pointer'> <span className=' rounded-full border-2 border-s1 p-3 mr-2 '><Zap className='inline' color='yellow'/></span>  <span className='text-xl'>Studentist</span></h1>
                <p className='text-[16px]'>Studentist offers a collection of ready-to-use features and tools to help you build engaging and organized educational platforms quickly and effectively.</p>

                <div className='flex gap-2 mt-4 max-lg:mx-auto max-lg:justify-center '>
                    <span className='size-10 hover:size-11 hover:border-p1 group transition-all duration-100 flex items-center justify-center p-2 rounded-full border-2 border-s2'><SiGoogle className='icon'/></span>
                    <span className='size-10 hover:size-11 hover:border-p1 group transition-all duration-100 flex items-center justify-center p-2 rounded-full border-2 border-s2'><SiGithub className='icon'/></span>
                    <span className='size-10 hover:size-11 hover:border-p1 group transition-all duration-100 flex items-center justify-center p-2 rounded-full border-2 border-s2'><SiLinkedin className='icon'/></span>
                    <span className='size-10 hover:size-11 hover:border-p1 group transition-all duration-100 flex items-center justify-center p-2 rounded-full border-2 border-s2'><SiX className='icon'/></span>
                </div>
            </div>
            <div className='w-[15%] max-lg:hidden'/>
            <div className='mt-5 max-lg:mx-auto'>
               <div className='flex max-md:flex-col'>
                    <div className='link-wrapper'>
                        <p className='head'>Product</p>
                        <p className='head-p'>Features</p>
                        <p className='head-p'>Courses</p>
                        <p className='head-p'>Integrations</p>
                        <p className='head-p'>Updates</p>
                    </div>
                    <div className='link-wrapper'>
                        <p className='head'>Company</p>
                        <p className='head-p'>About</p>
                        <p className='head-p'>Team</p>
                        <p className='head-p'>Blog</p>
                        <p className='head-p'>Contact</p>
                    </div> 
                    <div className='link-wrapper'>
                        <p className='head'>Resources</p>
                        <p className='head-p'>Docs</p>
                        <p className='head-p'>Community</p>
                        <p className='head-p'>Support</p>
                        <p className='head-p'>Security</p>
                    </div>
                    </div>

            </div>
            <div className="absolute bottom-0 text-center left-0 py-4 bg-s8 w-full">
                ©Copyright. All rights reserved. <span className='ml-2'>Developed by Abubakar</span>
            </div>
        </div>
    </section>
  )
}
