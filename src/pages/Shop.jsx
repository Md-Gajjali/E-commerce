import React, { useEffect, useState } from 'react'
import Cards from '../Componets/Cards'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import { FaCircle } from "react-icons/fa";
import Breadcrumb from '../Componets/Breadcrumb'


const Shop = () => {
    const [product, setProduct] = useState([])

     useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => setProduct(data.products));
    }, []);

    

    return (
        <>
        <Container>
            <Breadcrumb className='mt-20'/>
            <div className='flex justify-between mt-12.5'>
                <h3 className=' font-pop font-bold text-[20px] '>Shop by Category</h3>
                <div className='flex justify-end  gap-2 items-center '>
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

            <div className='flex'>
            <div className='w-[20%]'>
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
            <div className='w-[80%] flex flex-wrap gap-7.75 '>
                {/* {
                product.map((items)=>{
                    return(
                    <Cards
                        ImgSrc={items.thumbnail}
                        title={items.title}
                        price={Math.round(items.price - (items.price * items.discountPercentage) /100 ) }
                        discountPrice={items.price}
                        Review={items.reviews.length}
                        rating={items.rating}
                        DisParcentge={items.discountPercentage}
                        btn='Add To Card'
                    />
                    )
                })
                } */}

            </div>
            </div>
        </Container>
    </>

    )
}

export default Shop
