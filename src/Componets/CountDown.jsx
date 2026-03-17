import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';                           
import Flex from './Flex';


const CountDown = ({className}) => {

    const conduct_date = '2026-05-13 16:00:00';
    const [time,setTime]= useState([])
    
    
    useEffect(()=>{
        const Interval = setInterval(()=>{
            const countDown = countDownDateAndTime(conduct_date)
            setTime(countDown)
        },1000)
    },[])

  return (
    <Flex className={`lg:gap-2.5 gap-2 lg:text-[32px] text-[17px] font-bold font-Inter ${className}`}>
        <h2><p className='lg:text-xs text-xs font-medium font-pop'>Days</p>{time.days} :</h2>
        <h2><p className='lg:text-xs text-xs '>Hour</p>{time.hours} :</h2>
        <h2><p className='lg:text-xs text-xs '>Minutes</p>{time.minutes} :</h2>
        <h2><p className='lg:text-xs text-xs '>Second</p>{time.seconds}</h2>
    </Flex>
  )
}

export default CountDown
