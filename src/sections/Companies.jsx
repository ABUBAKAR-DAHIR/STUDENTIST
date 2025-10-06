import React from 'react'
import Marquee from 'react-fast-marquee'
import {companies} from '../constants/CompaniesConstants'

export default function Companies() {
  return (
    <section className='pt-10 pb-15'>
        <Marquee speed={100} pauseOnHover>
            {
                companies.map((company)=>(
                    <div key={company.id} className='h-[300px] max-lg:h-[250px] max-md:h-[200px] bg-s9 px-3'>
                        <div className='flex items-center justify-center size-[300px] max-lg:h-[250px] max-md:size-[200px] '>
                            <img src={company.logo} alt={company.name} width={300} height={300} className='object-contain flex items-center justify-center'/>
                        </div>
                    </div>
                ))
            }
        </Marquee>
    </section>
  )
}
