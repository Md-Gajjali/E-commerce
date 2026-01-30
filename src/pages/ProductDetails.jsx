import React from 'react'
import Breadcrumb from '../Componets/Breadcrumb'
import Flex from '../Componets/Flex'
import Container from '../Componets/Container'
import img from '../assets/console2.png'
import imgg from '../assets/console3.png'
import { Rate } from 'antd';
import { GoDotFill } from "react-icons/go";



const ProductDetails = () => {
    return (
        <div className='mt-20'>
            <Container>
                <Breadcrumb />
                <Flex className=' justify-between mt-20 '>
                    <div className='flex  gap-7.5  items-center '>
                        <div className='h-150'>
                            <img src={img} alt="" />
                            <img className='py-2.5 ' src={img} alt="" />
                            <img className='py-3.5 ' src={img} alt="" />
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <img className='w-125 h-150' src={imgg} alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='font-Inter font-semibold text-[28px] w-84 '>Havic HV G-92 Gamepad</h1>
                        <Flex className='items-center gap-1 mt-4'>
                            <Rate allowHalf defaultValue={3} />
                            <p className='font-pop font-medium text-[14px] text-[#3736367b] border-r-2   px-2'>(150 Reviews)</p>
                            <p className='text-[#00FF66]  '>In Stock</p>
                        </Flex>

                        <h3 className='font-Inter font-medium text-2xl text-black mt-4.5'>$ 192.00</h3>
                        <p className='w-93  font-pop font-medium text-[14px] text-black mt-6 leadin-21'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                        <hr className='w-100 mt-6 text-[#3736367b] ' />

                        <Flex className='items-center mt-6'>
                            <h4 className='font-Inter font-medium text-[20px] text-black'>Color :</h4>
                            <GoDotFill className='border-black text-[#A0BCE0] w-10 h-10 mt-1'/>
                            <GoDotFill className='border-black text-[#E07575] w-10 h-10 mt-1'/>
                        </Flex>
                        <div className='flex gap-3 mt-6'>
                            <h4 className='font-Inter font-medium text-[20px] '>Size:</h4>
                            <Flex className=' gap-4 '>
                                <div className='w-8 h-8 border-2 text-[14px] hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    XS
                                </div>
                                <div className='w-8 h-8 border-2 text-[14px] hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    S
                                </div>
                                <div className='w-8 h-8 border-2 text-[14px] hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    M
                                </div>
                                <div className='w-8 h-8 border-2 text-[14px] hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    L
                                </div>
                                <div className='w-8 h-8 border-2 text-[14px] hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    XL
                                </div>
                            </Flex>
                        </div>
                        <div className='mt-6'>
                            <div className='w-10 h-11 flex justify-center items-center rounded-sm text-4xl border  border-[#929395] py-2.5'>-</div>
                            <div className='w-20 flex justify-center items-center'>2</div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default ProductDetails
