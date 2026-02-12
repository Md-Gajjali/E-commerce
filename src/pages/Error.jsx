import React from 'react'
import Container from '../Componets/Container'
import Breadcrumb from '../Componets/Breadcrumb'
import Button from '../Componets/Button'

const Error = () => {
  return (
    <div>
      <Container>
        <Breadcrumb className='mt-20'/>
        <div className='text-center justify-center items-center'>
            <h1 className='font-Inter font-medium text-[110px] '>404 Not Found</h1>
            <p className='font-pop font-normal text-[16px] mt-10'>Your visited page not found. You may go home page.</p>
            <Button className='w-63.5 bg-primary mt-20 mx-auto'>Back to home page</Button>
        </div>
      </Container>
    </div>
  )
}

export default Error
