import React from 'react'
import SecHeading from './SecHeading'
import Container from './Container'
import CardTwo from './CardTwo'
import phone from '../assets/phone.png'
import cemera from '../assets/Category-Camera.png'
import computer from '../assets/Category-Computer.svg'
import GamePad from '../assets/Category-Gamepad.png'
import HeadPhone from '../assets/Category-Headphone.png'
import SmartWatch from '../assets/Category-SmartWatch.png'
import Flex from './Flex'
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";



function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='block absolute rounded-full p-3 bg-gray-100 right-17 -top-19' onClick={onClick} >
      <FaArrowLeft />
    </div>
  );
}


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='block absolute rounded-full p-3 bg-gray-100 right-5 -top-19' onClick={onClick} >
      <FaArrowRight />
    </div>
  );
}





const Category = () => {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
    <div className='mt-20'>
      <Container>
            <SecHeading 
                title='Categories'
                heading='Browse By Category'
                />
                <Flex className='mt-15 justify-start '>
                <Slider {...settings} className='w-full'>
                  <CardTwo 
                    imgSrc={phone}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={computer}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={SmartWatch}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={cemera}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={HeadPhone}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={GamePad}
                    title='Phones'
                  />
                    <CardTwo 
                    imgSrc={phone}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={phone}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={phone}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={phone}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={phone}
                    title='Phones'
                  />
                  <CardTwo 
                    imgSrc={phone}
                    title='Phones'
                  />
                  </Slider>
                </Flex>
                <div className='border border-[#00000036] mt-17.5' />
      </Container>
    </div>

    </>
  )
}

export default Category
