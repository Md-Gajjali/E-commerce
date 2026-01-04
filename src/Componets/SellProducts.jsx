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
            <Flex className='justify-between'>
                <SecHeading 
                    title='This Month'
                    heading='Best Selling Products'
                />
            </Flex>
                <Button className='39.75 '>
                    View All
                </Button>
        </Container>
      </div>
    </>
  )
}

export default SellProducts
