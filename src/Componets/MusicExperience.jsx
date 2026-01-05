import React, { useEffect ,useState } from 'react'
import Container from './Container'
import { countDownDateAndTime } from 'countdown-date-time';                           
import Flex from './Flex';
import Button from './Button';

const MusicExperience = () => {

    const conduct_date = '2026-01-08 12:00:00';
    const [time,setTime]= useState([])
    
    
    useEffect(()=>{
        const Interval = setInterval(()=>{
            const countDown = countDownDateAndTime(conduct_date)
            setTime(countDown)
        },1000)
    },[])


  return (
    <div className='py-35'>
      <Container>
        <div className=' Music w-full h-105 py-17.75 px-14  md:h-130 bg-center bg-no-repeat bg-cover'>
            <p className='text-[16px] mt-8 font-pop text-[#00FF66] '>Categories</p>
            <h2 className='w-100  text-white text-[48px] font-semibold  leading-15 font-inter '>Enhance Your Music Experience</h2>
            <Flex className='text-white gap-2 mt-8'>
                <h2 className='w-15.5 h-15.5  rounded-full bg-white flex text-center justify-center items-center text-black'><span className=''>{time.hours}<p className='text-xs text-center '>Hour</p></span></h2>
                <h2 className='w-15.5 h-15.5 rounded-full bg-white flex text-center justify-center items-center text-black'> <span>0{time.days} <p className='text-xs font-medium font-pop '>Days</p></span></h2>
                <h2 className='w-15.5 h-15.5  rounded-full bg-white flex text-center justify-center items-center text-black'><span>{time.minutes} <p className='text-xs'>Minutes</p></span> </h2>
                <h2 className='w-15.5 h-15.5  rounded-full bg-white flex text-center justify-center items-center text-black'><span>{time.seconds}<p className='text-xs'>Second</p></span></h2>
            </Flex>
            <Button className='bg-[#00FF66] mt-10 w-42.75'>Buy Now</Button>
        </div>
      </Container>
    </div>
  )
}

export default MusicExperience
