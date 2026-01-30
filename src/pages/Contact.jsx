import Container from '../Componets/Container'
import Breadcrumb from '../Componets/Breadcrumb'
import Cards from '../Componets/Cards'
import Flex from '../Componets/Flex'
import React, { useEffect, useState } from 'react'
import Paginate from '../Componets/paginate'
import axios from 'axios'
import { FilterReducer, GetProducts } from '../ProductSlice'
import { useDispatch } from 'react-redux'
import Skeleton from '../Componets/Skeleton'


const Contact = () => {
  const [products, setProducts] = useState([])
  const [category, setCetegory] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  async function getAllData() {
    await axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products)
        setLoading(true)
        dispatch(GetProducts(res.data.products))
      })
  }


  useEffect(() => {
    getAllData()
  }, [])

  // useEffect(()=>{
  //   fetch('https://dummyjson.com/products')
  //   .then(res => res.json())
  //   .then((data)=> setProducts(data.products));
  // },[])


  useEffect(() => {
    const UniqueCetegory = [...new Set(products.map((items) => items.category))]
    setCetegory(UniqueCetegory);
  }, [products])

  const handleFilter = (items) => {
    const FilterCetegory = products.filter((categoryItem) => categoryItem.category == items)
    dispatch(FilterReducer(FilterCetegory))

  }
  


  return (
    <div>
      <Container>
        <Breadcrumb className='mt-20' />
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

        <Flex>
          <div className='w-[20%]'>
            <ul className='leading-8 py-3.75 text-[16px]  font-normal'>
              {
                category.map((items, idx) => {
                  return (
                    <li key={idx} onClick={() => handleFilter(items)}>{items}</li>
                  )
                }, [])
              }

            </ul>

            <ul className='leading-8 py-3.75 text-[16px] font-normal'>
              <li>color1</li>
              <li>color1</li>
              <li>color1</li>
            </ul>
          </div>
          <div className='w-[80%] flex flex-wrap gap-7.75 '>
            {/* {
            products.map((items ,idx)=>{
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
                      key={idx}
                  />
                )
              })
            } */}
            {
              loading ?
                <Paginate itemsPerPage={6} />
                : <><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></>
            }

          </div>
        </Flex>

      </Container>
    </div>
  )
}

export default Contact
