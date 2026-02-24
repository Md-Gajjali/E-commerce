import React, { useEffect ,useState } from 'react'
import Container from './Container'
import { countDownDateAndTime } from 'countdown-date-time';                           
import Flex from './Flex';
import Button from './Button';
import Music from '../assets/JBL.png'

const MusicExperience = () => {

    const conduct_date = '2026-03-18 16:00:00';
    const [time,setTime]= useState([])
    
    
    useEffect(()=>{
        const Interval = setInterval(()=>{
            const countDown = countDownDateAndTime(conduct_date)
            setTime(countDown)
        },1000)
    },[])


  return (
    <div className=' py-35'>
      <Container>
        <div className=' bg-[url(assets/JBL.png)] w-full h-105 py-17.75 px-14  md:h-130 bg-center bg-no-repeat bg-cover'>
            <p className='text-[16px] mt-8 font-pop text-[#00FF66] '>Categories</p>
            <h2 className='w-100  text-white text-[48px] font-semibold  leading-15 font-inter '>Enhance Your Music Experience</h2>
            <Flex className='MusicExprience text-white gap-2 mt-8 time'>
                <h2><span className=''>{time.hours}<p>Hour</p></span></h2>
                <h2><span>0{time.days} <p >Days</p></span></h2>
                <h2><span>{time.minutes} <p>Minutes</p></span> </h2>
                <h2><span>{time.seconds}<p>Second</p></span></h2>
            </Flex>
            <Button className='bg-[#00FF66] mt-10 w-42.75'>Buy Now</Button>
        </div>
      </Container>
    </div>
  )
}

export default MusicExperience
