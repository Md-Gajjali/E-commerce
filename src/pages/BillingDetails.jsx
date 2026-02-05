import React from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Breadcrumb from '../Componets/Breadcrumb'
import img from '../assets/LAD.png'
import payment from '../assets/payment.png'
import Button from '../Componets/Button'

const BillingDetails = () => {
    return (
        <div className='mt-20'>
            <Container>
                <Breadcrumb />
                <h2 className='font-Inter font-medium text-3xl pt-20'>Billing Details</h2>
                <Flex className='mt-20 justify-between '>
                    <div>
                        <div>
                            <label htmlFor="" className='block font-pop  text-[16px]'>First Name</label>
                            <input type="text" placeholder='inter your name' className='w-117.5 h-12.5 px-4 py-3 rounded-sm  outline-none focus:outline-none mt-2 bg-gray-200' />
                        </div>
                        <div className='mt-7.5'>
                            <label htmlFor="" className='block font-pop  text-[16px]'>Company Name</label>
                            <input type="text" placeholder='Company Name' className='w-117.5 h-12.5 px-4 py-3 rounded-sm  outline-none focus:outline-none mt-2 bg-gray-200' />
                        </div>
                        <div className='mt-7.5'>
                            <label htmlFor="" className='block font-pop  text-[16px]'>Street Address*</label>
                            <input type="text" placeholder='Street Address*' className='w-117.5 h-12.5 px-4 py-3 rounded-sm  outline-none focus:outline-none mt-2 bg-gray-200' />
                        </div>
                        <div className='mt-7.5'>
                            <label htmlFor="" className='block font-pop  text-[16px]'>Apartment, floor, etc. (optional)</label>
                            <input type="text" placeholder='Apartment, floor, etc. (optional)' className='w-117.5 h-12.5 px-4 py-3 rounded-sm  outline-none focus:outline-none mt-2 bg-gray-200' />
                        </div>
                        <div className='mt-7.5'>
                            <label htmlFor="" className='block font-pop  text-[16px]'>Town/City*</label>
                            <input type="text" placeholder='Town/City*' className='w-117.5 h-12.5 px-4 py-3 rounded-sm  outline-none focus:outline-none mt-2 bg-gray-200' />
                        </div>
                        <div className='mt-7.5'>
                            <label htmlFor="" className='block font-pop  text-[16px]'>Phone Number*</label>
                            <input type="text" placeholder='Phone Number*' className='w-117.5 h-12.5 px-4 py-3 rounded-sm  outline-none focus:outline-none mt-2 bg-gray-200' />
                        </div>
                        <div className='mt-7.5'>
                            <label htmlFor="" className='block font-pop  text-[16px]'>Email Address*</label>
                            <input type="text" placeholder='Email Address*' className='w-117.5 h-12.5 px-4 py-3 rounded-sm  outline-none focus:outline-none mt-2 bg-gray-200' />
                        </div>
                        <div className='flex gap-4 mt-7'>
                            <input type="checkbox" name="" id="" className='w-6 h-6 bg-primary!' />
                            <p>Save this information for faster check-out next time</p>
                        </div>
                    </div>
                    <div className='w-131.75 mt-10 '>
                        <div className='flex gap-6 justify-between items-center  '>
                            <span className='flex items-center gap-7'>
                                <img src={img} alt="" className='w-11 h-11' />
                                <h3>LCD Monitor</h3>
                            </span>
                                <p> $560</p>
                        </div>
                        <div className='flex mt-10 gap-6 justify-between items-center  '>
                            <span className='flex items-center gap-7'>
                                <img src={img} alt="" className='w-11 h-11' />
                                <h3>LCD Monitor</h3>
                            </span>
                                <p> $560</p>
                        </div>
                        <div className='flex  justify-between items-center border-b h-12 mt-8.5'>
                            <p>Subtotal:</p>
                            <span>$1150</span>
                        </div>
                        <div className='flex  justify-between items-center border-b h-12'>
                            <p>Subtotal:</p>
                            <span>$Free</span>
                        </div>
                        <div className='flex  justify-between items-center mt-4 '>
                            <p>Total:</p>
                            <span>$1150</span>
                        </div>
                        <div className='flex gap-4   justify-between mt-8.5'>
                            <div className='flex'>
                              <input type="radio" id="html" name="fav_language" value="HTML" className='w-11 '/>
                              <p>Blank</p>
                            </div>
                            <img src={payment} alt="" />
                        </div>
                        <div className='flex mt-8.5'>
                              <input type="radio" id="html" name="fav_language" value="HTML" className='w-11 '/>
                              <p>Cash on delivery </p>
                            </div>
            
                        <Flex className='justify-between mt-7'>
                            <input type="text" className='px-6 py-4 border-[#3736367b] border rounded-sm ' placeholder='Coupon Code' />
                            <Button className='bg-primary text-black!'>Apply Coupon</Button>
                        </Flex>
                        <Button className='bg-primary text-black! mt-7 w-47.5'>Place Order</Button>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default BillingDetails
