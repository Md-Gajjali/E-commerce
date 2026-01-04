import React from 'react'
import Container from './Container'
import ex from '../assets/Exclusive.png'
import Flex from './Flex'
import { FaOpencart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";


const Navber = () => {
  return (
    <>
      <nav className='pt-10 pb-4'>
        <Container>
            <Flex className='justify-between items-center'>
                <div>
                    <img src={ex} alt="" />
                </div>
                <ul className='flex justify-between gap-12 font-pop'>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign up</li>
                </ul>
                <div className='relative '>
                    <input type="text" 
                    placeholder='What are you looking for?' 
                    className='rounded-sm outline-none  text-xs  bg-[#F5F5F5] w-60.75 ps-5 pe-17.5 py-2.75  ' />
                    <SlMagnifier className='text-2xl absolute top-2 right-4'/>
                </div>
                <div className='flex text-[32px] gap-4 '>
                    <CiHeart />
                    <FaOpencart />
                </div>
            </Flex>
        </Container>
      </nav>
    </>
  )
}

export default Navber
