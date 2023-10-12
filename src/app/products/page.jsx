'use client';

import React, {useState, useEffect} from 'react'
import PageLoader from '@/components/PageLoader';
import ProductCard from '@/components/ProductCard';
import axios from 'axios';
import Filter from '@/components/Filter';

export default function page() {
    const [loading, setLoading] = useState(true);
    const [Products, setProducts] = useState([]);
    const url = 'http://localhost:4201/api';
  
  useEffect(()=>{
      axios.get(url+'/get_products',{
      headers:{
        'Content-Type':'application/json'
      }
      }).then((res)=>{
        setProducts(res.data); 
        setLoading(false)
      });
  },[]);

  if (loading) {
    return(
      <PageLoader />
    )
}


  return (
    <main className="mt-20 pb-10 pl-64 w-screen relative overflow-hidden min-h-screen">
        {/* <div className={`grid px-1 grid-cols-4 grid-flow-row`}>
            {
              Products.map((item)=>(
                <ProductCard key={item._id} image={item.productImage} category={item.category} subcategory={item.subcategory} title={item.title} price={item.price} discount={item.discount} />
              ))
            }
            {
              Products.map((item)=>(
                <ProductCard key={item._id} image={item.productImage} category={item.category} subcategory={item.subcategory} title={item.title} price={item.price} discount={item.discount} />
              ))
            }
            {
              Products.map((item)=>(
                <ProductCard key={item._id} image={item.productImage} category={item.category} subcategory={item.subcategory} title={item.title} price={item.price} discount={item.discount} />
              ))
            }
          </div> */}

          <Filter />
    </main>
  )
}
