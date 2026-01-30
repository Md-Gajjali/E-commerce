import React from 'react'
import Breadcrumb from '../Componets/Breadcrumb'
import Flex from '../Componets/Flex'
import Container from '../Componets/Container'
import img from '../assets/console2.png'
import imgg from '../assets/console3.png'
import { Rate } from 'antd';
import { GoDotFill } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { IoMdRemove } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";



const ProductDetails = () => {
    return (
        <div className='mt-20'>
            <Container>
                <Breadcrumb />
                <Flex className=' justify-between mt-20 '>
                    <div className='flex  gap-7.5  items-center '>
                        <div className='h-170'>
                            <img src={img} alt="" />
                            <img className='py-11 ' src={img} alt="" />
                            <img src={img} alt="" />
                            <img className='py-11 ' src={img} alt="" />
                        </div>
                        <div>
                            <img className='w-125 h-170' src={imgg} alt="" />
                        </div>
                    </div>
                    <div className='h-150'>
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
                                <div className='w-8 h-8 border-2 text-[14px] cursor-pointer hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    XS
                                </div>
                                <div className='w-8 h-8 border-2 cursor-pointer text-[14px] hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    S
                                </div>
                                <div className='w-8 h-8 border-2 cursor-pointer text-[14px] hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    M
                                </div>
                                <div className='w-8 h-8 border-2 cursor-pointer text-[14px] hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    L
                                </div>
                                <div className='w-8 h-8 cursor-pointer border-2 text-[14px] hover:border-none rounded-sm border-[#929395] px-1.75 py-1.75 flex justify-center items-center hover:bg-red-500 hover:text-white text-black'>
                                    XL
                                </div>
                            </Flex>
                        </div>
                        <div className='mt-6 flex'>
                            <div className='w-10 h-11 flex justify-center items-center rounded-l-sm text-4xl border-2  border-[#929395] py-2.5 cursor-pointer'><IoMdRemove /></div>
                            <div className='w-20 flex justify-center items-center border-2  border-[#929395]  border-r-none'>2</div>
                            <div className='bg-[#DB4444] w-10 text-white text-4xl flex justify-center items-center rounded-r-sm cursor-pointer'><GoPlus /></div>
                        </div>
                        <div className='w-99.75 border-[#929395] border-2 mt-10 py-6 px-4 rounded-sm '>
                            <Flex className='items-center gap-7'>
                                <h4 className='text-5xl text-black w-10'><TbTruckDelivery /></h4>
                                <div>
                                    <p className='font-pop font-medium text-[16px] '>Free Delivery</p>
                                    <p className='font-pop font-medium text-[12px] '>Enter your postal code for Delivery Availability</p>
                                </div>
                            </Flex>
                            
                        </div>
                        <div className='w-99.75 border-[#929395] border-2 rounded-b-sm  py-6 px-4 border-t-0 -mt-2'>
                            <Flex className='items-center gap-7  mt-4 '>
                                <h4 className='text-5xl text-black w-10'><TfiReload /></h4>
                                <div>
                                    <p className='font-pop font-medium text-[16px] '> Return Delivery</p>
                                    <p className='font-pop font-medium text-[12px] '>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </Flex>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default ProductDetails
