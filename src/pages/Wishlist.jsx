import React from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Button from '../Componets/Button'
import { useSelector } from 'react-redux'
import Cards from '../Componets/Cards'
import { BsTrash3 } from "react-icons/bs";

const Wishlist = () => {
    const Whishlist = useSelector((state) => state.AllProducts.Wishlist)
    console.log(Whishlist)


    return (
        <div>
            <Container>
                <Flex className='justify-between items-center mt-20'>
                    <h2>Wishlist({Whishlist.length})</h2>
                    <Button className='border text-black! '>Move All To Bag</Button>
                </Flex>
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
                                />
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Wishlist
