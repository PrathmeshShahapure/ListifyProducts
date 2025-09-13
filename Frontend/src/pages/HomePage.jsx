import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoCartSharp } from 'react-icons/io5'
import noProductImg from '../assests/image.png'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import ProductCard from '../components/ui/ProductCard'
 


const homepage = () => {
  
  const { fetchProducts ,products ,showMsg ,msg,} =useContext(MyContext);
  useEffect(()=>{
    fetchProducts();
  },[])
 console.log(products)
  
 
     

  const renderNOProduct=()=>{

 return (
         <div className=' flex  flex-col  items-center'>
       
         <img src={noProductImg} alt="no products"/>

         <Link  to={"/create"} className='underline text-center mt-10 flex gap-4 items-center'> 
          <h1> Create Product </h1>
          <IoCartSharp fontSize={30} />
         </Link>

         </div>
        )
  }

  const renderProducts=()=>{

 return (
          <div className=' text-center'>
           <h1 className='mt-10 text-3xl'> Current Products</h1>
           <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 p-5'>
            {products.map((each)=> <ProductCard key={each._id} product={each}  />)}
               
          </div>
            <p className='mt-8'>{showMsg && msg } </p>
         </div>
        )
  }

  return (
    <div>  { products.length>0 ? renderProducts(): renderNOProduct()} </div>
  )
}

export default homepage