import React from 'react'
import Container from './Container'
import Flex from './Flex'
import SecHeading from './SecHeading'
import Button from './Button'

const SellProducts = () => {
  return (
    <>
      <div className='mt-15'>
        <Container>
            <div className=' relative '>
                <SecHeading 
                    title='This Month'
                    heading='Best Selling Products'
                />
                <Button className='w-39.75 absolute top-13 right-0 '>
                    View All
                </Button>
            </div>

            
        </Container>
      </div>
    </>
  )
}

export default SellProducts
