'use client'


import { useState, useEffect} from 'react'
import axios from 'axios'
import ProductCard from "@/components/ProductCard";
import PageLoader from '@/components/PageLoader';


export default function Home() {

  const [isLoading, setLoading] = useState(true); 
  const [newProducts, setNewProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [slider, setslider] = useState(false);

  const url = 'http://localhost:4201/api';
  
  useEffect(()=>{
      axios.get(url+'/get_new_products',{
      headers:{
        'Content-Type':'application/json'
      }
      }).then((res)=>{
        setNewProducts(res.data); 
      });
      
      axios.get(url+'/get_hero_section_products',{
          headers:{
              'Content-Type':'application/json'
          }
      }).then((res)=>{
            setLoading(false)
            setFeaturedProducts(res.data); 
        });
  },[]);

 
console.log(featuredProducts);
    

  if (isLoading) {
      return(
        <PageLoader />
      )
  }
  
  return (
    <>


      <main className="mt-20 pb-10 pl-64 w-screen relative overflow-hidden min-h-screen">
        

        <aside className="w-full px-5 max-w-full flex items-center justify-center">

          <div class="mb-8 w-full overflow-hidden rounded-xl border border-gray-200 hover:border-gray-400">
          <div class="flex w-full flex-col overflow-hidden bg-white sm:flex-row md:h-64">
            <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 class="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">Winter Collection</h2>
              <p class=" text-base">By Luis Vuitton</p>
              <p class="mt-4 mb-6 max-w-md text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam iusto, cumque dolores sit odio ex.</p>
              <a href="#" class="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
                <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Shop now </span>
                <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div class="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" loading="lazy" />
            </div>
          </div>
        </div>

        </aside>



        <section className="w-full relative overflow-x-auto scrollbar-hide">
          <div className="w-full max-w-full flex  justify-between px-4">
            <span className="flex items-end">
              <h1 className="text-gray-700">Top Bespoke Products</h1>
              <a className="font-light text-xs ml-2 text-gray-500" href='#'>View all</a>
            </span>
            <div>
              <button  className="px-4 text-gray-400 py-0.5 border border-gray-200 rounded-md">
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button  className="px-4 mx-1 text-gray-400 py-0.5 border border-gray-200 rounded-md">
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
          <div className={`flex justify-between px-1 w-[150%]`}>
            {
              featuredProducts.map((item)=>(
                <ProductCard key={item._id} image={item.productImage} category={item.category} subcategory={item.subcategory} title={item.title} price={item.price} discount={item.discount} />
              ))
            }
          </div>
        </section>
        


        
        <section className=" mt-8 w-full relative">
          <div className="w-full max-w-full flex  justify-between px-4">
            <span className="flex items-end">
              <h1 className="text-gray-700">Top Bespoke Products</h1>
              <a className="font-light text-xs ml-2 text-gray-500" href='#'>View all</a>
            </span>
            
          </div>
          <div className={`grid px-1 grid-cols-4 grid-flow-row`}>
            {
              newProducts.map((item)=>(
                <ProductCard key={item._id} image={item.productImage} category={item.category} subcategory={item.subcategory} title={item.title} price={item.price} discount={item.discount} />
              ))
            }
            {
              newProducts.map((item)=>(
                <ProductCard key={item._id} image={item.productImage} category={item.category} subcategory={item.subcategory} title={item.title} price={item.price} discount={item.discount} />
              ))
            }
            {
              newProducts.map((item)=>(
                <ProductCard key={item._id} image={item.productImage} category={item.category} subcategory={item.subcategory} title={item.title} price={item.price} discount={item.discount} />
              ))
            }
          </div>
        </section>
    </main>



    </>
  )
}
