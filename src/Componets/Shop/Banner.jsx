import React, { useEffect, useState } from 'react'
import Cards from '../Cards'
import speaker from '../../assets/Selling-Product/speaker.png'
import keyboard from '../../assets/keyBoard.png'
import LAD from '../../assets/LAD.png'
import Container from '../Container'
import Flex from '../Flex'
import { FaCircle } from "react-icons/fa";


const Banner = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setProducts(data.products));
    })
    // console.log(products);
    

    return (
        <>
            <Container>
                <Flex className='justify-between'>

                    <div className='w-[20%]'>
                            <div className='flex  w-full mt-20 text-[14px] font-pop font-normal text-[#3736367b]'>
                                <p>Home <span>/</span></p>
                                <p> SHop</p>
                               
                            </div>
                            <h2 className='font-pop font-bold text-[20px] mt-12.5'>Shop by Category</h2>
                            <ul className='leading-8 py-3.75 text-[16px] font-normal '>
                                <li>Woman’s Fashion</li>
                                <li>Men’s Fashion</li>
                                <li>Electronics</li>
                                <li>Home & Lifestyle</li>
                                <li>Medicine</li>
                                <li>Baby’s & Toys</li>
                                <li>Groceries & Pets</li>
                                <li>Health & Beauty</li>
                            </ul>
                            <ul className='leading-10 mt-3.75 myList '>
                            <h3 className='font-pop font-bold text-[20px] pt-10'> Shop by Color</h3>
                                <li className='text-start'><FaCircle /> Color 1</li>
                                <li><FaCircle className='text-red-600'/> Color 2</li>
                                <li><FaCircle className='text-green-400'/> Color 3</li>
                            </ul>
                    </div>

                    <div className='w-[80%]'>
                        <div className='flex flex-wrap justify-between gap-7.5 mt-52.5'>
                            <div className='flex justify-end  absolute top-40 right-0 gap-2 items-center'>
                                <div>
                                    <label htmlFor="text"> Show: </label>
                                    <select name="cars" id="cars" className='border border-[#D9D9D9] w-24.75 text-center'>
                                        <option value="volvo">6</option>
                                        <option value="saab">10</option>
                                        <option value="mercedes">14</option>
                                        <option value="audi">20</option>
                                        <option value="audi">All</option>
                                    </select>
                                </div>
                            </div>
                            {
                                products.map((items) => {
                                    return (
                                        <Cards
                                            ImgSrc={items.thumbnail}
                                            title={items.title}
                                            price={ Math.round(items.price -(items.price * items.discountPercentage) /100) }
                                            discountPrice={items.price}
                                            Review='65'
                                            // btn='Add To Card'
                                            DisParcentge={items.discountPercentage}
                                        />

                                    )
                                })
                            }

                        </div>
                    </div>

                </Flex>
            </Container>
        </>

    )
}

export default Banner
