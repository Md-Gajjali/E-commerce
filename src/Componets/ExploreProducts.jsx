import React from 'react'
import Container from './Container'
import SecHeading from './SecHeading'
import Slider from "react-slick";
import Cards from './Cards';
import Flex from './Flex';
import bag from '../assets/Selling-Product/bag.png'
import jacket from '../assets/Selling-Product/jacket.png'
import speaker from '../assets/Selling-Product/speaker.png'
import table from '../assets/Selling-Product/table.png'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Button from './Button';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='block absolute rounded-full p-3 bg-gray-100 right-17 -top-25' onClick={onClick} >
      <FaArrowLeft />
    </div>
  );
}


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='block absolute rounded-full p-3 bg-gray-100 right-5 -top-25' onClick={onClick} >
      <FaArrowRight />
    </div>
  );
}


const ExploreProducts = () => {

  const settings = {
    className: "justify-between",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
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
            },{
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
  };

    const {value:product} = useSelector((state)=> state.AllProducts)

      let navigate = useNavigate();
    

    const handleNavigate = () => {
     navigate('/Shop')
   }


  return (
    <div>
      <Container>
        <SecHeading 
            title='Our Products'
            heading='Explore Our Products'
        />
        <Flex className='flex-wrap '>
            <Slider {...settings} className=' w-full mt-15 flex justify-center  gap-20   '>
               {
                  product.map((item)=>{
                    return(
                      <Cards 
                        ImgSrc={item.thumbnail}
                        title={item.title}
                        price={Math.round(item.price - (item.price * item.discountPercentage)/100)}
                        discountPrice={item.price}
                        Review={item.review || 0}
                        rating={item.rating}
                        btn='Add To Card'
                        disHidden='hidden'
                      />
                    )
                  })
                }
            </Slider>
        </Flex>
        <Button className='bg-primary mx-auto text-[16px] font-pop font-medium mt-15 w-58.5' onclick={handleNavigate}>View All Products</Button>
      </Container>
    </div>
  )
}

export default ExploreProducts
