import React ,{useContext, useState} from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MyContext } from '../../context/MyContext'
import { Dialog } from '@headlessui/react';




const ProductCard = ({ product }) => {

  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { image, name, price, _id } = product;
  const { deleteProduct, handleMsgVisiblity ,updatedProductFun} = useContext(MyContext);
   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (id) => {
    console.log(id);
    const result = await deleteProduct(id);
    console.log(result);
    handleMsgVisiblity(result.message);
  };
  const handleUpdatedProduct = async (id, updatedProduct) => {
    console.log(id, updatedProduct);
    setIsModalOpen(false) ;
    const result = await updatedProductFun(id,updatedProduct);
    handleMsgVisiblity(result.message);
   } 

  return (
    <div className='h-105 transform text-white bg-zinc-800 dark:bg-zinc-800 shadow-2xl transition-transform duration-300 
    hover:-translate-y-2 rounded'>
      <img className='w-full rounded object-center h-[80%] mb-2' src={image} alt={name} />
     
      <h1> {name} </h1>
      <h1>{price} Rs</h1>
      <div className='flex justify-between px-2'></div>
        <div className=' flex justify-between  px-2 '> 
          <button onClick={() => setIsModalOpen(true)} type="button"> <FaEdit  className='bg-green-300 p-1 rounded' fontSize={25}/> </button>
          <button onClick={()=>handleDelete(_id)} type="button"> <MdDelete className='bg-red-300 p-1 rounded' fontSize={25}/> </button>
        </div>

        <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} 
        className="fixed inset-0  flex items-center justify-center bg-black/90 ">
        <div className="bg-zinc-900 p-6 rounded-lg w-80 text-white">
          <h1 className="text-lg font-bold mb-4">Edit Product</h1>
          
          <input 
            type="text" 
            placeholder='Product Name'
            value={updatedProduct.name}
            className="w-full mb-4 p-2 rounded bg-zinc-700 text-white"
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
          />
        
          <input 
            type="number" 
            placeholder='Price'
            value={updatedProduct.price}
            className="w-full mb-4 p-2 rounded bg-zinc-700 text-white"
            onChange={(e)=>setUpdatedProduct({...updatedProduct,price:e.target.value})}
          />
           <input 
            placeholder='Image URL'
            value={updatedProduct.image}
            className="w-full mb-4 p-2 rounded bg-zinc-700 text-white"
            onChange={(e)=>setUpdatedProduct({...updatedProduct,image:e.target.value})}
          />

          <div className="flex justify-end gap-2">
            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-red-500 rounded">Cancel</button>
            <button onClick={()=>handleUpdatedProduct(_id,updatedProduct)} className="px-4 py-2 bg-green-500 rounded">Save</button>
          </div>
        </div>
      </Dialog>

     
   
   </div>
  )
}

export default ProductCard