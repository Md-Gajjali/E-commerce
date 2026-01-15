import React from 'react'
import Breadcrumb from '../Componets/Breadcrumb'
import Container from '../Componets/Container'
import Cards from '../Componets/Cards'
import Flex from '../Componets/Flex'

const About = () => {
  return (
    <div>
        <Container>
            <Breadcrumb />
          <div className='flex mt-20'>
            <div className='w-[20%]'>
              <ul className='mt-15'>
                <li>console</li>
                <li>console</li>
                <li>console</li>
                <li>console</li>
                <li>console</li>
                <li>console</li>
                <li>console</li>
              </ul>
            </div>
            <Flex className='w-[80%] justify-between gap-4 flex-wrap'>
                <Cards
                ImgSrc={console}
                title='HAVIT HV-G92 Gamepad'
                price='120'
                discountPrice='160'
                DisParcentge='40%'
                Review='88'
                btn='Add to Card'
              />
              <Cards
                ImgSrc={console}
                title='HAVIT HV-G92 Gamepad'
                price='120'
                discountPrice='160'
                DisParcentge='40%'
                Review='88'
                btn='Add to Card'
              />
              <Cards
                ImgSrc={console}
                title='HAVIT HV-G92 Gamepad'
                price='120'
                discountPrice='160'
                DisParcentge='40%'
                Review='88'
                btn='Add to Card'
              />
              <Cards
                ImgSrc={console}
                title='HAVIT HV-G92 Gamepad'
                price='120'
                discountPrice='160'
                DisParcentge='40%'
                Review='88'
                btn='Add to Card'
              />
              <Cards
                ImgSrc={console}
                title='HAVIT HV-G92 Gamepad'
                price='120'
                discountPrice='160'
                DisParcentge='40%'
                Review='88'
                btn='Add to Card'
              /><Cards
                ImgSrc={console}
                title='HAVIT HV-G92 Gamepad'
                price='120'
                discountPrice='160'
                DisParcentge='40%'
                Review='88'
                btn='Add to Card'
              />
            </Flex>
          </div>
        </Container>
    </div>
  )
}

export default About
