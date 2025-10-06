import React from 'react'

export default function FeatureItem({feature}) {
  return (
    // <div className='my-5 w-[502px] h-[402px] flex items-center justify-center rounded-md max-md:w-[432px]'>
        <div className='bg-s2 border-2 border-s4 rounded-md w-[500px] h-[400px] py-5 px-6 max-md:w-[430px] max-md:h-auto max-md:pb-4  m-4 max-lg:h-[350px]'>
          <div className='py-4'>
            <p className='size-[80px] rounded-full flex items-center justify-center bg-s1 mb-2 hover:border-2 hover:border-white transition-colors duration-500 ease-in-out'>{feature.icon}</p>
            <h1 className='text-3xl font-semibold max-lg:text-2xl max-md:text-xl'>{feature.title}</h1>
            <p className='text-xl mt-4'>{feature.slogan}</p>
          </div>
        </div>
    // </div>
  )
}
