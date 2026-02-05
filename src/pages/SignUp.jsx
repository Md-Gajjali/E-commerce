import React from 'react'
import LoginImg from '../assets/LoginImg.png'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Button from '../Componets/Button'
import { FcGoogle } from "react-icons/fc";
import Sign from '../assets/SignUp.png'


const SignUp = () => {
  return (
    <div className='relative'>
      <Container>
        <Flex className='mt-15 justify-between gap-25'>
                    <div className=''>
                        <img src={Sign} alt=""  />
                    </div>
                    <div className='flex justify-center items-center  ' >
                        <div className='w-92.75 leading-15'>
                            <h2 className='font-Inter font-medium text-4xl '>Create an account</h2>
                            <p className='font-pop text-[16px]'>Enter your details below</p>
                            <input type="text" placeholder='Your Name' className='border-b h-15 w-full outline-none focus:outline-none focus:border-b ' />
                            <input type="text" placeholder='Email or Phone Number' className='border-b h-15 w-full outline-none focus:outline-none focus:border-b ' />
                            <input type="text" placeholder='Password'  className='border-b w-full h-15 outline-none focus:outline-none focus:border-b  "'/>
                            <div className=' '> 
                                <Button className='mt-10 bg-primary h-14 w-full   flex justify-center items-center'>Create Account</Button>
                                <Button className='  h-14 w-full   flex justify-center items-center border mt-10 text-black!'><FcGoogle className='mr-2'/>  Sign up with Google</Button>
                                <div className='flex  justify-center gap-10 '>
                                    <p>Already have account?</p>
                                    <h5>Log in</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>
      </Container>
    </div>
  )
}

export default SignUp
