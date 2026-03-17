import React from 'react'
import SecHeading from './SecHeading'
import Container from './Container'
import Cards from './Cards'
import console from '../assets/console.png'
import LAD from '../assets/LAD.png'
import keyboard from '../assets/keyBoard.png'
import kedara from '../assets/Frame 570.png'
import Flex from './Flex'
import CountDown from './CountDown'
import Button from './Button'
import Slider from "react-slick";
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
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='mt-38.5 px-3'>
        <Container >
          <div className='lg:flex items-end   '>
            <SecHeading
              title="Today’s"
              heading="Flash Sales"

            />
            <CountDown className='lg:pl-21.75 lg:mt-13 mt-4' />
          </div>
          <Flex>
            <Slider {...settings} className='w-full   grid lg:grid-col-4  grid-cols-2'>
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
                ImgSrc={keyboard}
                title='HAVIT HV-G92 Gamepad'
                price='120'
                discountPrice='160'
                DisParcentge='40%'
                Review='88'
                btn='Add to Card'
              />
              <Cards
                ImgSrc={LAD}
                title='HAVIT HV-G92 Gamepad'
                price='120'
                discountPrice='160'
                DisParcentge='40%'
                Review='88'
                btn='Add to Card'
              />
              <Cards
                ImgSrc={kedara}
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
          <div className='border border-[#00000013] mb-20' />
        </Container>
      </div>
    </>
  )
}

export default FlasSales
