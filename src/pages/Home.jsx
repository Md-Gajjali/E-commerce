import React from 'react'
import Header from '../Componets/header'
import Navber from '../Componets/Navber'
import Banner from '../Componets/Banner'
import FlasSales from '../Componets/FlasSales'
import Category from '../Componets/Category'
import SellProducts from '../Componets/SellProducts'
import MusicExperience from '../Componets/MusicExperience'
import ExploreProducts from '../Componets/ExploreProducts'
import NewArrival from '../Componets/NewArrival'
import Footer from '../Componets/Footer'
import Delivery from '../Componets/Delivery'

const Home = () => {
    return (
        <>
          <Banner />
          <FlasSales />
          <Category />
          <SellProducts />
          <MusicExperience />
          <ExploreProducts />
          <NewArrival />
          <Delivery />
        </>
    )
}

export default Home
