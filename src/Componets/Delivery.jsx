import React from 'react'
import Container from './Container'
import Flex from './Flex'
import DeliveryCards from './DeliveryCards'
import service from '../assets/Delivery/Services.png'

const Delivery = () => {
  return (
    <div>
      <Container>
        <Flex className='justify-center gap-22 mt-34'>
            <DeliveryCards 
                imgSrc={service}
                title='FREE AND FAST DELIVERY'
                heading='Free delivery for all orders over $140'
            /><DeliveryCards 
                imgSrc={service}
                title='FREE AND FAST DELIVERY'
                heading='Free delivery for all orders over $140'
            /><DeliveryCards 
                imgSrc={service}
                title='FREE AND FAST DELIVERY'
                heading='Free delivery for all orders over $140'
            />

        </Flex>
      </Container>
    </div>
  )
}

export default Delivery
