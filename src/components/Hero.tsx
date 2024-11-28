
import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    // <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile_image.png)] bg-cover'
    // style={{backgroundSize:"25%",backgroundPosition:"left 150px top 150px"}}
    <div>
      <Navbar/>
    
      
      <div className='container lg:grid-cols-2 flex flex-row gap-60'>
        <div>
      <img src='ali pic 3.jpg' alt='profile pic' className='mt-[60%] ml-[60%] w-[250px] h-[250px]'
    />
    </div>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center pt-[100px] pl-[30px]' >
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Ali</p>
            <p data-aos="zoom-in-up">Feroz</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
