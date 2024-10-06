import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import OurServices from './OurServices'

function Home() {
  return (
    <div className='bg-white'>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonials/>
      <OurServices/>
    </div>
    
  )
}

export default Home