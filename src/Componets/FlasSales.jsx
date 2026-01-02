import React from 'react'
import SecHeading from './SecHeading'
import Container from './Container'
import Cards from './Cards'
import console from '../assets/console.png'
import Flex from './Flex'
import Slider from "react-slick";
import CountDown from './CountDown'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}


const FlasSales = () => {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
        <div>
          <h3>
          <Cards 
          ImgSrc={console}
          title='HAVIT HV-G92 Gamepad'
          price='120'
          discountPrice='160'
          DisParcentge='40%'
          Review='88'
          /></h3>
        </div>
        <div>
          <h3>
          <Cards 
          ImgSrc={console}
          title='HAVIT HV-G92 Gamepad'
          price='120'
          discountPrice='160'
          DisParcentge='40%'
          Review='88'
          /></h3>
        </div>
        <div>
           <h3>
          <Cards 
          ImgSrc={console}
          title='HAVIT HV-G92 Gamepad'
          price='120'
          discountPrice='160'
          DisParcentge='40%'
          Review='88'
          /></h3>
        </div>
        <div>
           <h3>
          <Cards 
          ImgSrc={console}
          title='HAVIT HV-G92 Gamepad'
          price='120'
          discountPrice='160'
          DisParcentge='40%'
          Review='88'
          /></h3>
        </div>
        <div>
          <h3>
          <Cards 
          ImgSrc={console}
          title='HAVIT HV-G92 Gamepad'
          price='120'
          discountPrice='160'
          DisParcentge='40%'
          Review='88'
          /></h3>
        </div>
        <div>
           <h3>
          <Cards 
          ImgSrc={console}
          title='HAVIT HV-G92 Gamepad'
          price='120'
          discountPrice='160'
          DisParcentge='40%'
          Review='88'
          /></h3>
        </div>
      </Slider>


        </Flex>

        </Container>
    </div>
    </>
  )
}

export default FlasSales
