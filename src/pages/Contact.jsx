import React from 'react'
import Container from '../Componets/Container'
import Breadcrumb from '../Componets/Breadcrumb'
import Flex from '../Componets/Flex'
import phone from '../assets/Phone2.png'
import mail from '../assets/mail.png'
import Button from '../Componets/Button'

const Contact = () => {
  return (
    <div>
      <Container>
        <Breadcrumb className='mt-20' />
        <Flex className='gap-2.5 items-center justify-between'>
          <div className='w-85 mt-20 py-10 px-8.5 h-118.25 shadow'>
            <div className='w-[256px]  '>
              <Flex className='items-center mt-6  gap-3'>
                <img src={phone} alt="" />
                <p>Contact us </p>
              </Flex>
              <p className='leading-9 mt-2 border-b h-20'>We are available 24/7, 7 days a week.
                Phone: +8801611112222</p>
              <Flex className='items-center  gap-3 mt-8.5'>
                <img src={mail} alt="" />
                <p>Contact us </p>
              </Flex>
              <p className='leading-9 mt-2  '>Fill out our form and we will contact you within 24 hours.</p>
              <p className='cursor-pointer leading-7'>Emails: customer@exclusive.com Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className='w-200 shadow py-9 px-8.5   mt-22' >
            <Flex className='justify-between'>
              <input type="text" placeholder='Your Name ' className='px-3 py-4 rounded-sm bg-gray-200 outline-none focus:outline-none ' />
              <input type="text" placeholder='Your Name ' className='px-3 py-4 rounded-sm bg-gray-200 outline-none focus:outline-none' />
              <input type="text" placeholder='Your Name ' className='px-3 py-4 rounded-sm bg-gray-200 outline-none focus:outline-none ' />
            </Flex>
            <input type="text" placeholder='Your Name ' className='w-full  h-52.5 mt-10  px-3 rounded-sm bg-gray-200 outline-none focus:outline-none text-start' />
            <div className='flex justify-end '>
              <Button className='bg-primary mt-10  w-53.75'>Send Massage</Button>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Contact
