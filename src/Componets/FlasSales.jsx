import React from 'react'
import SecHeading from './SecHeading'
import Container from './Container'
import Cards from './Cards'
import console from '../assets/console.png'
import Flex from './Flex'
import Slider from "react-slick";
import CountDown from './CountDown'
import Button from './Button'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";



      function SamplePrevArrow(props) {
          const { onClick } = props;
          return (
              <div className='block absolute rounded-full p-3 bg-gray-100 right-17 -top-12' onClick={onClick} >
                <FaArrowLeft />
              </div>
          );
      }


    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className='block absolute rounded-full p-3 bg-gray-100 right-5 -top-12' onClick={onClick} >
                <FaArrowRight />
            </div>
        );
    }





const FlasSales = () => {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,  
  };
  return (
    <>
    <div className='mt-38.5'>
        <Container >
          <Flex className='items-end'>
            <SecHeading  
            title="Today’s"
            heading="Flash Sales"
            />
            <CountDown className='pl-21.75'/>
          </Flex>
        <Flex>
        <Slider {...settings} className='w-full'>
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

      </Slider>

        </Flex>
        <Button className='bg-primary w-60.75 mx-auto mt-9.25 mb-15  '>View All Products</Button>
        </Container>
    </div>
    </>
  )
}

export default FlasSales
