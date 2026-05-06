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
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'




const SellProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
  };

  const {value:product} = useSelector((state)=> state.AllProducts)

  console.log(product)

    let navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/shop")
    }
  
  return (
    <>
      <div className='mt-15 '>
        <Container>
            <div className=' relative '>
                <SecHeading 
                    title='This Month'
                    heading='Best Selling Products'
                />
                <Button className='w-39.75 bg-primary absolute top-13 right-0 ' onclick={handleNavigate}>
                    View All
                </Button>
            </div>
            <Flex>
              <Slider {...settings} className=' w-full mt-15 overflow-hidden'>
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
        </Container>
      </div>
    </>
  )
}

export default SellProducts
