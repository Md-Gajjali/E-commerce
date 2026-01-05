import React from 'react'
import Container from './Container'
import { countDownDateAndTime } from 'countdown-date-time';                           

const MusicExperience = () => {
    const conduct_date = '2026-01-05 16:00:00';
    const [time,setTime]= useState([])
    
  return (
    <div className='py-35'>
      <Container>
        <div className='Music Music w-full h-[420px] py-[69px] px-[56px]  md:h-[520px] bg-center bg-no-repeat bg-cover'>
            <p className='text-[16px] font-pop text-[#00FF66] '>Categories</p>
            <h2 className='w-[400px]  text-white text-[48px] font-semibold  leading-15 font-inter '>Enhance Your Music Experience</h2>

        </div>
      </Container>
    </div>
  )
}

export default MusicExperience
