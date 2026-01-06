import React, { useState } from 'react'
import Container from './Container'
import ex from '../assets/Exclusive.png'
import Flex from './Flex'
import { FaOpencart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { FaBarsStaggered } from "react-icons/fa6";



const Navber = () => {

  const [show,setShow]=useState(false)

  const handleClick = ()=> {
    setShow(!show)
    console.log(show);
    
  }


  return (
    <>
      <nav className='relative pt-10 pb-4 px-3 lg:px-static'>
        <Container>
            <Flex className='justify-between items-center'>
                <div>
                    <img src={ex} alt="" className='flex' />
                </div>

                <div className={`${show ? "block" : "hidden"} items-center lg:gap-15  lg:flex absolute top-20 z-100 lg:top-static lg:static`}>
                  <ul className='lg:flex justify-between gap-12 font-pop  '>
                      <li>Home</li>
                      <li>Contact</li>
                      <li>About</li>
                      <li>Sign up</li>
                  </ul>

                  <div className='relative flex '>
                      <input type="text" 
                      placeholder='What are you looking for?' 
                      className='rounded-sm outline-none  text-xs w-30 lg:w-static   bg-[#F5F5F5] lg:w-60.75 ps-5 pe-17.5 py-2.75  ' />
                      <SlMagnifier className='text-2xl absolute top-2 right-4'/>
                  </div>
                  <div className=' text-[32px] gap-4 flex '>
                      <CiHeart />
                      <FaOpencart />
                  </div>
                </div>
                  <FaBarsStaggered  className='lg:hidden block' onClick={handleClick}/>

            </Flex>
        </Container>
      </nav>


    </>
  )
}

export default Navber
