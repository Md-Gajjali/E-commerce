import React from 'react'
import Container from './Container'
import SecHeading from './SecHeading'
import Flex from './Flex'

const NewArrival = () => {
    return (
        <div>
            <Container>
                <div className='mt-42 mx-auto w-full'>
                    <SecHeading
                        className='mx-auto'
                        title='Featured'
                        heading='New Arrival'
                    />
                </div>
                <Flex className="gap-4 items-start">
                    <div className='Ps5 w-1/4 h-105 bg-center bg-no-repeat bg-cover' />
                    <div className='WomanVibe w-1/4 h-105 bg-center bg-no-repeat bg-cover' />
                    <div className='speaker w-1/4 h-105 bg-center bg-no-repeat bg-cover' />
                    <div className='perfume w-1/4 h-105 bg-center bg-no-repeat bg-cover' />
                </Flex>
            </Container>
        </div>
    )
}

export default NewArrival
