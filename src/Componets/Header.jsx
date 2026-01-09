import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { SlArrowDown } from "react-icons/sl";
import { NavLink } from 'react-router';


const Header = () => {
  return (
    <>
      <div className='bg-black text-white py-3 px-3 lg:px-static'>
        <Container>
            <Flex className='justify-between items-center'>
                    <p className='w-200 text-[14px] mx-auto  opacity-90 '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!   <NavLink to="/Shop" end><a href="" className='text-white opacity-100'>ShopNow</a></NavLink>   </p>
                    <button className='flex items-center gap-2'>
                        English <SlArrowDown  /> 
                    </button>
            </Flex>
        </Container>
      </div>


    </>
  )
}

export default Header
