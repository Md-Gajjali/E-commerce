import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';                           
import Flex from './Flex';


const CountDown = ({className}) => {

    const conduct_date = '2026-01-19 16:00:00';
    const [time,setTime]= useState([])
    
    
    useEffect(()=>{
        const Interval = setInterval(()=>{
            const countDown = countDownDateAndTime(conduct_date)
            setTime(countDown)
        },1000)
    },[])

  return (
    <Flex className={`gap-2.5 text-[32px] font-bold font-Inter ${className}`}>
        <h2><p className='text-xs font-medium font-pop'>Days</p>0{time.days} :</h2>
        <h2><p className='text-xs'>Hour</p>{time.hours} :</h2>
        <h2><p className='text-xs'>Minutes</p>{time.minutes} :</h2>
        <h2><p className='text-xs'>Second</p>{time.seconds}</h2>
    </Flex>
  )
}

export default CountDown
