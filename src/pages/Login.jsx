import React from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import LoginImg from '../assets/LoginImg.png'
import Button from '../Componets/Button'

const Login = () => {
    return (
        <div>
            <Container>
                <Flex className='mt-15 justify-between'>
                    <div>
                        <img src={LoginImg} alt="" />
                    </div>
                    <div className='flex justify-center items-center' >
                        <div className='w-92.75 leading-20'>
                            <h2 className='font-Inter font-medium text-4xl '>Log in to Exclusive</h2>
                            <p className='font-pop text-[16px]'>Enter your details below</p>
                            <input type="text" placeholder='Email or Phone Number' className='border-b h-15 w-full outline-none focus:outline-none focus:border-b ' />
                            <input type="text" placeholder='Password'  className='border-b w-full h-15 outline-none focus:outline-none focus:border-b  "'/>
                            <Flex className='justify-between items-center '> 
                                <Button className='bg-primary h-14'>Log in</Button>
                                <h3>Forget Password?</h3>
                            </Flex>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Login
