import React from 'react'
import Container from './Container'
import SecHeading from './SecHeading'
import Slider from "react-slick";

const ExploreProducts = () => {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container>
        <SecHeading 
            title='Our Products'
            heading='Explore Our Products'
        />

      </Container>
    </div>
  )
}

export default ExploreProducts
