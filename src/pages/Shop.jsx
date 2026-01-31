import React, { useEffect, useState } from 'react'
import Container from '../Componets/Container'
import { FaCircle } from "react-icons/fa";
import Breadcrumb from '../Componets/Breadcrumb'
import Paginate from '../Componets/paginate';
import Skeleton from '../Componets/Skeleton';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { FilterReducer, GetProducts } from '../ProductSlice';


const Shop = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [category, setCetegory] = useState([])
    const [value,setValue] = useState(6)

    

    // const count = useSelector((state) => state.counter.value)

    //  useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //     .then(res => res.json())
    //     .then((data) => 
    //         setProduct(data.products),
    //         setLoading(true)
    //     );
    // }, []);
    const dispatch = useDispatch()

    async function getAllData() {
        await axios.get('https://dummyjson.com/products')
            .then((res) => {
                setProduct(res.data.products)
                setLoading(true)
                dispatch(GetProducts(res.data.products))
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
        const FilterItem = product.filter((cetegoryItem) => cetegoryItem.category == items)
        dispatch(FilterReducer(FilterItem))
    }

    return (
        <>
            <Container>
                <Breadcrumb className='mt-20' />
                <div className='flex justify-between mt-12.5'>
                    <h3 className=' font-pop font-bold text-[20px] '>Shop by Category</h3>
                    <div className='flex justify-end  gap-2 items-center '>
                        <label htmlFor="text"> Show: </label>
                        <select onChange={(e)=>{setValue(e.target.value)}}  className='border  border-[#D9D9D9] w-24.75 text-center'>
                            <option value="6">6</option>
                            <option value="9">9</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                </div>

                <div className='flex'>
                    <div className='w-[20%]'>
                        <ul className='leading-8 py-3.75 text-[16px] font-normal '>
                                <li className='cursor-pointer'  onClick={() => dispatch(GetProducts(product))}>All Product</li>

                            {
                                category.map((items, idx) => {
                                    return (
                                        <li className='cursor-pointer' key={idx} onClick={() => handleFilter(items)}>{items}</li>
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
                                <Paginate itemsPerPage={value} />
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
