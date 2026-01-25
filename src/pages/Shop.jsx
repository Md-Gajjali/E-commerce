import React, { useEffect, useState } from 'react'
import Container from '../Componets/Container'
import { FaCircle } from "react-icons/fa";
import Breadcrumb from '../Componets/Breadcrumb'
import Paginate from '../Componets/paginate';
import Skeleton from '../Componets/Skeleton';
import axios from 'axios'

const Shop = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [category, setCetegory] = useState([])

    //  useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //     .then(res => res.json())
    //     .then((data) => 
    //         setProduct(data.products),
    //         setLoading(true)
    //     );
    // }, []);

    async function getAllData() {
        await axios.get('https://dummyjson.com/products')
            .then((res) => {
                setProduct(res.data.products)
                setLoading(true)
            })
    }

    

    useEffect(() => {
        getAllData()
    }, [])


    useEffect(() => {
        const UniqueCetegory = [...new Set(product.map((item) => item.category))]
        setCetegory(UniqueCetegory);

    }, [product])

    const handleFilter = (items) => {
        const FilterItem = product.filter((cetegoryItem)=> cetegoryItem.category  == items )     
        console.log(FilterItem);
           
    }

    return (
        <>
            <Container>
                <Breadcrumb className='mt-20' />
                <div className='flex justify-between mt-12.5'>
                    <h3 className=' font-pop font-bold text-[20px] '>Shop by Category</h3>
                    <div className='flex justify-end  gap-2 items-center '>
                        <label htmlFor="text"> Show: </label>
                        <select name="cars" id="cars" className='border  border-[#D9D9D9] w-24.75 text-center'>
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
                            {
                                category.map((items ,idx) => {
                                    return (
                                        <li className='' key={idx} onClick={(items)=> handleFilter(items)}>{items}</li>
                                    )
                                })
                            }

                        </ul>

                        <ul className='leading-10 mt-3.75 myList '>
                            <h3 className='font-pop font-bold text-[20px] pt-10'> Shop by Color</h3>
                            <li className='text-start'><FaCircle /> Color 1</li>
                            <li><FaCircle className='text-red-600' /> Color 2</li>
                            <li><FaCircle className='text-green-400' /> Color 3</li>
                        </ul>
                    </div>
                    <div className='w-[80%] flex flex-wrap gap-7.75 '>
                        {
                            loading ?
                                <Paginate itemsPerPage={6} products={product} />
                                :
                                <> <Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></>
                        }
                    </div>
                </div>
            </Container>
        </>

    )
}

export default Shop
