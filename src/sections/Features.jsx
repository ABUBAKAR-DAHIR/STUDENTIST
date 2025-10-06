import React from 'react'
import { Element } from 'react-scroll'
import features from '../constants/FeaturesConstants'
import FeatureItem from '../components/FeatureItem'

export default function Features() {
  return (
    <section className='z-2'>
        <Element name='features'>
            <div className='container flex flex-wrap items-center justify-center mx-auto '>
                {
                    features.map((feature) => (
                        // <FeatureItem key={feature.id} icon={feature.icon} title={feature.title} slogan={feature.slogan}/>
                        <FeatureItem key={feature.id} feature={feature}/>   
                    ))
                }
            </div>
        </Element>
    </section>
  )
}
