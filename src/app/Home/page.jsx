import React from 'react'
import ImageStack from '../../components/Homecomp/ImageStack'
import MarqueeTitle from '../../components/Homecomp/MarqueeTitle'
import WorkSection from '../../components/Homecomp/WorkSection'


const page = () => {
  return (
    <div>
        <ImageStack/>
        <div className="min-h-screen bg-white">
        <MarqueeTitle text="My Projects" number="01"/>
        <WorkSection/>
        </div>
        </div>
  )
}

export default page