import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';



const Paginate = ({ itemsPerPage ,products}) => {

  
  const items = products;
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((items) => (
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
          ))}
      </>
    );
  }
      const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Paginate
