import React from 'react'
import Container from './Container'
import Flex from './Flex'
import SecHeading from './SecHeading'
import Button from './Button'
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Cards from './Cards'
import bag from '../assets/Selling-Product/bag.png'
import jacket from '../assets/Selling-Product/jacket.png'
import speaker from '../assets/Selling-Product/speaker.png'
import table from '../assets/Selling-Product/table.png'


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






const SellProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  
  return (
    <>
      <div className='mt-15 '>
        <Container>
            <div className=' relative '>
                <SecHeading 
                    title='This Month'
                    heading='Best Selling Products'
                />
                <Button className='w-39.75 absolute top-13 right-0 '>
                    View All
                </Button>
            </div>
            <Flex>
              <Slider {...settings} className=' w-full mt-15 overflow-hidden'>
                <Cards 
                  ImgSrc={jacket}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'
                />
                <Cards 
                  ImgSrc={jacket}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={jacket}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                /><Cards 
                  ImgSrc={jacket}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={jacket}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={jacket}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={jacket}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={jacket}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={jacket}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />

              </Slider>  
            </Flex>
        </Container>
      </div>
    </>
  )
}

export default SellProducts
