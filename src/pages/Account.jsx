import React from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Breadcrumb from '../Componets/Breadcrumb'
import Button from '../Componets/Button'

const Account = () => {
    return (
        <div>
            <Container>
                <Flex className='justify-between items-center py-20 '>
                    <Breadcrumb />
                    <p>Welcome! <span className='text-primary text-[14px] font-pop font-medium'>Md Rimel</span></p>
                </Flex>
                <Flex className='justify-between'>
                    <div>
                        <h2 className='font-pop font-medium text-[16px]'>Manage My Account</h2>
                        <ul className='mt-4 leading-8 ml-8.25 text-blackPrimary'>
                            <li className='text-primary'>My Profile</li>
                            <li>Address Book</li>
                            <li>My Payment option</li>
                        </ul>

                        <h2 className='font-pop font-medium text-[16px] mt-10 '>My order</h2>
                        <ul className='mt-4 leading-8 ml-8.25 text-blackPrimary'>
                            <li>My Returns</li>
                            <li>My Cancellations</li>
                        </ul>
                        <h2 className='font-pop font-medium text-[16px] mt-4'>My WishList</h2>
                    </div>
                    <div className='py-10 px-20 shadow'>
                        <h2 className='text-[20px] font-medium font-pop text-primary'>Edit Your Profile</h2>
                        <Flex className='mt-4 gap-12.5'>
                            <div>
                                <label htmlFor="Name">First name</label>
                                <input type="text" placeholder='Md' className='mt-2 w-82.5 block outline-0 bg-gray-100 focus-within:none py-3.25 px-4 rounded-sm ' />
                            </div>
                            <div>
                                <label htmlFor="Name">Last Name</label>
                                <input type="text" placeholder='Last Name' className='mt-2 w-82.5 block outline-0 bg-gray-100 focus-within:none py-3.25 px-4 rounded-sm ' />
                            </div>
                        </Flex>
                        <Flex className='mt-4 gap-12.5'>
                            <div>
                                <label htmlFor="Email">Email</label>
                                <input type="Email" placeholder='helloworld@gmail.com' className='mt-2 w-82.5 block outline-0 bg-gray-100 focus-within:none py-3.25 px-4 rounded-sm ' />
                            </div>
                            <div>
                                <label htmlFor="Address">Address</label>
                                <input type="Address" placeholder='Kingston, 5236, United State' className='mt-2 w-82.5 block outline-0 bg-gray-100 focus-within:none py-3.25 px-4 rounded-sm ' />
                            </div>
                        </Flex>
                        <p className='text-[16px] font-normal font-pop mt-6 '>Password</p>
                        <input type="Password" placeholder='Current Passwod ' className='w-full outline-0 mt-2 bg-gray-100 focus-within:none py-3.25 px-4 rounded-sm ' />
                        <input type="Password" placeholder='New Passwod' className=' w-full outline-0 mt-4 bg-gray-100 focus-within:none py-3.25 px-4 rounded-sm ' />
                        <input type="Password" placeholder='Confirm New Passwod' className='w-full outline-0 mt-4 bg-gray-100 focus-within:none py-3.25 px-4 rounded-sm ' />
                        <div className='flex items-center gap-10  justify-end mt-4 '>
                            <p className='text-[16px] font-pop font-normal'>Cancel</p>
                            <Button className='bg-primary text-black'>Save Changes</Button>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Account
