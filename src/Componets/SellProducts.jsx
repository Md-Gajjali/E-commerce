import React from 'react'
import Container from './Container'
import Flex from './Flex'
import SecHeading from './SecHeading'
import Button from './Button'
import Cards from './Cards'
import bag from '../assets/Selling-Product/bag.png'
import jacket from '../assets/Selling-Product/jacket.png'
import speaker from '../assets/Selling-Product/speaker.png'
import table from '../assets/Selling-Product/table.png'
import Slider from "react-slick";




const SellProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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
                <Button className='w-39.75 bg-primary absolute top-13 right-0 '>
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
                  ImgSrc={bag}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={speaker}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={table}
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
                  ImgSrc={bag}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={speaker}
                  title='The north coat'
                  price='260'
                  discountPrice='360'
                  Review='65'
                  btn='Add To Card'
                  disHidden='hidden'

                />
                <Cards 
                  ImgSrc={table}
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
