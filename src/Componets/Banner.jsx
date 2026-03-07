import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import bannerImg from '../assets/iphone.svg'
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuChartBarStacked } from "react-icons/lu";


const Banner = () => {


    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
        <div
          style={{
            color:'#808080',
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div className='w-3 h-3 rounded-full bg-[#808080] '/>
      )
    //   responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
    };

    const[show,setShow]=useState(true)

    const handleClick = ()=>{
      setShow(!show)
    }


  return (
    <div className='relative  px-3 lg:px-static'>
      <Container>
        <div className=' gap-12.25  lg:flex '>
            <div className={`${show ? "block" :"hidden" } lg:border-r border-[#00000061] pe-4.5 lg:w-[30%] font-pop`} >
                <ul className='banner-ul lg:gap-y-16 mt-10   lg:block '>
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
            <div className='pt-10 w-full lg:w-[70%] '> 
              
               <Slider {...settings} className=' overflow-hidden' >
                <div>
                  <h3><img src={bannerImg} alt="" /></h3>
                </div>
                <div>
                  <h3><img src={bannerImg} alt=""  /></h3>
                </div>
                <div>
                  <h3><img src={bannerImg} alt="" /></h3>
                </div>
               </Slider>
            </div>
        </div>
        <LuChartBarStacked className='absolute top-6 left-0 -mt-4  lg:hidden' onClick={handleClick}/>

      </Container>
    </div>
  )
}

export default Banner
