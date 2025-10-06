import React from 'react'

export default function FeatureItem({feature}) {
  return (
    <div className='my-5 mx-5 g1 w-[502px] h-[402px] flex items-center justify-center rounded-md max-md:w-[432px]'>
        <div className='bg-s2 border-2 border-g1 rounded-md w-[500px] h-[400px] py-5 px-6 max-md:w-[430px] '>
            <p className='size-[80px] rounded-full flex items-center justify-center bg-s1 mb-2 hover:border-2 hover:border-white transition-colors duration-500 ease-in-out'>{feature.icon}</p>
            <h1 className='text-3xl font-semibold max-lg:text-2xl max-md:text-xl'>{feature.title}</h1>
            <p className='text-xl mt-4'>{feature.slogan}</p>
        </div>
    </div>
  )
}
