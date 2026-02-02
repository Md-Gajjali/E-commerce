import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { useSelector} from 'react-redux'



const Paginate = ({ itemsPerPage  }) => {


  const AllProduct = useSelector((state) => state.AllProducts.value)
  const items = AllProduct;

  function Items({ currentItems }) {



    return (
      <>
        {currentItems &&
          currentItems.map((items,idx) => (
            <Cards
                ImgSrc={items.thumbnail}
                id={items.id}
                productDetails={items}
                title={items.title}
                price={Math.round(items.price - (items.price * items.discountPercentage) /100 ) }
                discountPrice={items.price}
                Review={items.reviews.length}
                rating={items.rating}
                DisParcentge={items.discountPercentage}
                btn='Add To Card'
                key={idx}
            />
          ))}
      </>
    );
  }


  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" "
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=" "
        renderOnZeroPageCount={null}
        className='absolute -bottom-19 left-55 flex gap-2.5 '
        pageClassName='bg-black text-white py-[10px] px-[20px] '
      />
    </>
  )
}


export default Paginate

