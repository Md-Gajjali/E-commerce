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
            <p>Your visited page not found. You may go home page.</p>
            <Button></Button>
        </div>
      </Container>
    </div>
  )
}

export default Error
