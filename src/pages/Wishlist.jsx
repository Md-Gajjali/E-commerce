import React, { useEffect, useState } from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Button from '../Componets/Button'
import { useSelector } from 'react-redux'
import Cards from '../Componets/Cards'
import SecHeading from '../Componets/SecHeading'
import lad from '../assets/LAD.png'
import { BsTrash } from "react-icons/bs";


const Wishlist = () => {

    const Whishlist = useSelector((state) => state.AllProducts.Wishlist)


    return (
        <div>
            <Container>
                <Flex className='justify-between items-center mt-20'>
                    <h2>Wishlist({Whishlist.length})</h2>
                    <Button className='border text-black!  hover:bg-primary hover:text-white! ease-in-out duration-400 '>Move All To Bag</Button>
                </Flex>
                    {Whishlist.length === 0 && <div className='text-3xl py-20   text-center font-pop font-semibold'>Product not found 🥹</div>}
                <div className='flex  justify-between gap-4 flex-wrap'>
                    {
                        Whishlist.map((item) => {
                            return (
                                <Cards
                                    ImgSrc={item.thumbnail}
                                    title={item.title}
                                    price={Math.round(item.price - (item.price * item.discountPercentage) / 100)}
                                    discountPrice={item.price}
                                    DisParcentge={item.discountPercentage}
                                    btn='Add TO Card'
                                    disEye='hidden'
                                    disRating='hidden'
                                    disReview='hidden'
                                    Delete={<BsTrash />}
                                    id={item.id}
                                />
                            )
                        })
                    }
                </div>
                <div className='mt-20 flex items-center   justify-between'>
                    <SecHeading title='Just For You' />
                    <Button className='border hover:border-none text-black!  hover:bg-primary hover:text-white! ease-in-out duration-400'>See All</Button>
                </div>
                <div className='flex justify-between flex-wrap '>
                    <Cards
                        ImgSrc={lad}
                        title='no title'
                        price='1200'
                        discountPrice='400'
                        DisParcentge='70'
                        btn='Add TO Card'
                        disEye='hidden'
                        disRating='hidden'
                        disReview='hidden'
                    />
                     <Cards
                        ImgSrc={lad}
                        title='no title'
                        price='1200'
                        discountPrice='400'
                        DisParcentge='70'
                        btn='Add TO Card'
                        disEye='hidden'
                        disRating='hidden'
                        disReview='hidden'
                    />
                     <Cards
                        ImgSrc={lad}
                        title='no title'
                        price='1200'
                        discountPrice='400'
                        DisParcentge='70'
                        btn='Add TO Card'
                        disEye='hidden'
                        disRating='hidden'
                        disReview='hidden'
                    /> 
                    <Cards
                        ImgSrc={lad}
                        title='no title'
                        price='1200'
                        discountPrice='400'
                        DisParcentge='70'
                        btn='Add TO Card'
                        disEye='hidden'
                        disRating='hidden'
                        disReview='hidden'
                    />
                </div>
            </Container>
        </div>
    )
}

export default Wishlist
