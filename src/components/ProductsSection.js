import { React, useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

const ProductsSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProdcuts();
  }, []);

  //funckcija zrendra prvih 8 produktov
  const getProdcuts = async () => {
    const response = await fetch(
      "https://mocki.io/v1/32c2ed49-c46e-4052-9040-c89904fbfccd"
    );
    const products = await response.json();
    setData(Array.from(products));
  };

  //funkcija na vsako sekundo zrendra nove 4 produkte in jih združi s predhodnimi
  const fetchMoreItems = () => {
    setTimeout(async () => {
      const response = await fetch(
        "https://mocki.io/v1/af48fee2-1c86-4c65-95af-dffcc0eb057c"
      );
      const products = await response.json();
      setData(data.concat(Array.from(products)));
    }, 1000);
  };

  // funcija ob kliku na gumb povozi vse projšnje produkte v arreyu in zrendra 4 nove
  const filterProducts = async () => {
    const response = await fetch(
      "https://mocki.io/v1/af48fee2-1c86-4c65-95af-dffcc0eb057c"
    );
    const products = await response.json();
    setData(products);
  };

  return (
    <div>
      <button
        onClick={filterProducts}
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded button'>
        Filter Products
      </button>
      <InfiniteScroll
        className='scroll'
        dataLength={data.length}
        next={fetchMoreItems}
        hasMore={true}
        loader={<h1>Loading...</h1>}>
        {data.map((item, index) => {
          return (
            <div className='item' key={index}>
              <img className='product-img' src={item.image} alt='product' />
              <h3>Product number: {index + 1}</h3>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default ProductsSection;
