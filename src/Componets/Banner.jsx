import React from 'react'
import Container from './Container'
import Flex from './Flex'
import bannerImg from '../assets/iphone.svg'
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='realtive border-t border-[#00000061]'>
      <Container>
        <Flex className='justify-between'>
            <div className='border-r border-[#00000061] pr-5.5'>
                <ul className='banner-ul gap-y-16 mt-10 '>
                    <li className='flex items-center justify-between  '>Woman’s Fashion <IoIosArrowForward className='text-2xl' /></li>
                    <li className='flex  items-center justify-between  '>Men’s Fashion <IoIosArrowForward className='text-2xl' /></li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries &  </li>
                    <li>Health & Beauty</li>
                </ul>
            </div>
            <div className='w-250 mx-auto  '> 
              
              <Slider {...settings} className='w-full '>
                <div>
                  <h3><img src={bannerImg} alt="" /></h3>
                </div>
                <div>
                  <h3><img src={bannerImg} alt=""  /></h3>
                </div>
                <div>
                  <h3><img src={bannerImg} alt="" /></h3>
                </div>
                <div>
                </div>
              </Slider>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Banner
