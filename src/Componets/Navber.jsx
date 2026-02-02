import React, { useState } from 'react'
import Container from './Container'
import ex from '../assets/Exclusive.png'
import Flex from './Flex'
import { FaOpencart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router";
import { useSelector } from 'react-redux';
import { IoCartOutline } from "react-icons/io5";



const Navber = () => {

  const [show,setShow]=useState(false)
  const Product = useSelector((state) => state.AllProducts.cart)

  const handleClick = ()=> {
    setShow(!show) 
  }


  return (
    <>
      <nav className='relative pt-10 pb-4 px-3 lg:px-static'>
        <Container>
            <Flex className='justify-between items-center'>
                <div>
                    <img src={ex} alt="" className='flex' />
                </div>

                <div className={`${show ? "block" : "hidden"} items-center lg:gap-15 lg:flex absolute top-10 lg:top-0 left-0 right-0 px-3 py-2 lg:z-0 z-100 bg-black lg:bg-transparent lg:w-auto text-white lg:text-black lg:bg-hidden lg:static`}>
                  <ul className='navUl lg:flex justify-between gap-12 font-pop'>
                      <li >
                        <NavLink to="/" end>Home</NavLink>
                      </li>
                      <li >
                        <NavLink to="/Contact" end>Contact</NavLink>
                      </li>
                      <li >
                        <NavLink to="/About" end>About</NavLink>
                      </li>
                      <li >
                        <NavLink to="/" end>Sign up</NavLink>
                      </li>
                  </ul>

                  <div className='relative flex '>
                      <input type="text" 
                      placeholder='What are you looking for?' 
                      className='rounded-sm outline-none  text-xs w-30 lg:w-static   bg-[#F5F5F5] lg:w-60.75 ps-5 pe-17.5 py-2.75  ' />
                      <SlMagnifier className='text-2xl absolute top-2 right-4'/>
                  </div>
                  <div className=' text-[32px] gap-4 flex '>
                      <CiHeart />
                      {/* <FaOpencart />  */}
                      <NavLink to='CartItems' >
                        
                      <div className='relative'>
                        <IoCartOutline />
                          <div className='absolute -top-1  -right-2 w-5 h-5 text-xs  rounded-full bg-primary flex justify-center items-center font-semibold text-white'>{Product.length}</div>
                      </div>
                      </NavLink>

                  </div>
                </div>
                  <FaBarsStaggered  className='lg:hidden block' onClick={handleClick}/>
            </Flex>
        </Container>
      </nav>
      <div className='border-t border-[#00000061]'/>


    </>
  )
}

export default Navber
