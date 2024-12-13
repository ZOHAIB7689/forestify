'use client'

import Navbar from '@/components/navbar'
import Section1 from './section1'
import Section2 from './section2'
import Education from './section3'

const Home =()=> {
  return (
    <div className=''>
      <Navbar/>
    <Section1/>
    <Section2/>
    <Education/>
    </div>
  )
}


export default Home