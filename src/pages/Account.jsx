import React from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Breadcrumb from '../Componets/Breadcrumb'

const Account = () => {
    return (
        <div>
        <Container>
            <Flex className='justify-between items-center py-20 '>
                <Breadcrumb  />
                <p>Welcome! <span className='text-primary text-[14px] font-pop font-medium'>Md Rimel</span></p>
            </Flex>
            <Flex>
                <div className=''>
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
                <div  className='py-10 px-20 '>
                    <h2 className='text-[20px] font-medium font-pop text-primary'>Edit Your Profile</h2>
                </div>
            </Flex>
        </Container>
        </div>
    )
}

export default Account
