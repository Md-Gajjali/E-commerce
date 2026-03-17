import React from 'react'
import Container from './Container'
import Flex from './Flex'
import DeliveryCards from './DeliveryCards'
import service from '../assets/Delivery/Services.png'

const Delivery = () => {
  return (
    <div>
      <Container>
        <div className='justify-center  flex flex-wrap gap-22 mt-34'>
            <DeliveryCards 
                imgSrc={service}
                title='FREE AND FAST DELIVERY'
                heading='Free delivery for all orders over $140'
            />
            <DeliveryCards 
                imgSrc={service}
                title='FREE AND FAST DELIVERY'
                heading='Free delivery for all orders over $140'
            />
            <DeliveryCards 
                imgSrc={service}
                title='FREE AND FAST DELIVERY'
                heading='Free delivery for all orders over $140'
            />

        </div>
      </Container>
    </div>
  )
}

export default Delivery
