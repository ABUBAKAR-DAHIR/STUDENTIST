import clsx from 'clsx';
import React, { useState } from 'react'
import SlideDown from 'react-slidedown'
import "react-slidedown/lib/slidedown.css";

export default function FaqItem({item}) {
    let [show, setShow] = useState(false)
  return (
    <div className={clsx('p-6 mb-4 mt-2 transition-all duration-500 ease-in-out rounded-xl group', show && 'g2')}>
        <div className='flex items-center justify-between transition-all duration-500 ease-in-out cursor-pointer' onClick={() => setShow(!show)}>
            <div className={clsx('py-6 px-4 text-2xl transition-colors duration-500 group-hover:text-p5', show && 'text-s8 group-hover:text-s5')}>
                {
                    <p className={clsx('text-lg max-md:hidden transition-colors duration-500', show ? 'text-black' : 'text-p6')}>{item.id < 10 ? '0'+ item.id : item.id}</p>
                }
                {item.question}
            </div>

            <div className={clsx('size-12 min-w-12 border-2 border-s8 transition-all duration-500 flex items-center justify-center  group-hover:border-2 group-hover:border-amber-200 rounded-full cursor-pointer faq-icon after:transition-transform after:duration-500', show ? 'after:rotate-0' : 'after:rotate-90')}>
                <div className={clsx('size-11/12 rounded-full g3', show && '')} ></div>
            </div>
            
            
            {/* <div className={clsx('relative faq-icon  rounded-full border-2 border-s2 size-12 min-w-12 flex items-center justify-center group-hover:border-s3 transition-all duration-500 ease-in-out', show && 'after:rotate-0 after:bg-p1 ')}>
                <div className={clsx('bg-red-500 rounded-full size-[calc(100%-3px)]', show && 'size-[calc(100%-6px)]')}/>
            </div> */}
        </div>

        <SlideDown>
            {
                show && (<div className='px-4'>{item.answer}</div>)
            }
        </SlideDown>
    </div>
  )
}
