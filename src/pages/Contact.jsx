import Container from '../Componets/Container'
import Breadcrumb from '../Componets/Breadcrumb'
import Cards from '../Componets/Cards'
import Flex from '../Componets/Flex'
import React, { useEffect, useState } from 'react'


const Contact = () => {
  const[products,setProducts]=useState([])
  
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=> setProducts(data.products));
  },[])

  console.log(products);
  

      const [product, setProduct] = useState([])
  
       useEffect(() => {
          fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then((data) => setProduct(data.products));
      }, []);

  return (
    <div>
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
            <ul className='leading-8 py-3.75 text-[16px]  font-normal'>
              <li>Woman’s Fashion</li>
              <li>Woman’s Fashion</li>
              <li>Woman’s Fashion</li>
              <li>Woman’s Fashion</li>
              <li>Woman’s Fashion</li>
              <li>Woman’s Fashion</li>
              <li>Woman’s Fashion</li>
              <li>Woman’s Fashion</li>
              <li>Woman’s Fashion</li>
              <li>Woman’s Fashion</li>
            </ul>

            <ul className='leading-8 py-3.75 text-[16px] font-normal'>
              <li>color1</li>
              <li>color1</li>
              <li>color1</li>
            </ul>
          </div>
          <div className='w-[80%] flex flex-wrap gap-7.75 '>
            {
            products.map((items)=>{
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
            }

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
