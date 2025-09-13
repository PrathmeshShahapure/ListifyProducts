import React from 'react'
import { useState, useContext } from 'react'
// import './CreateStyle.css'
import { MyContext } from '../context/MyContext'


const CreatePage = () => {

    const { createProduct,handleMsgVisiblity,showMsg,msg } = useContext(MyContext);
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value })
    }

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newProduct);
        const result = await createProduct(newProduct);
        console.log(result.message);
        handleMsgVisiblity(result.message);

        setNewProduct({
            name: "",
            price: "",
            image: ""
        })


    }

    return (
        <div className='w-full h-[90] dark:text-gray-100'>
            <div className='w-screen min-h-full p-8 flex  flex-col items-center  mt-10'>
                <h1 className=' text-4xl text-center mb-10'> Create New Product </h1>
                <form onSubmit={handleSubmit} className='flex w-[40%] flex-col justify-center 
                items-center rounded-xl shadow-xl border dark:border-white border-black p-10'>
                    
                    <input className="w-[60%] px-2 h-8 border my-1 rounded text-black dark:text-white dark:border-white border-black" 
                     value={newProduct.name} name="name" onChange={handleChange} type="text" 
                     placeholder='Enter Product Name' />

                    <input className="w-[60%] px-2 h-8 border my-1 rounded  text-black dark:text-white dark:border-white border-black" 
                     onChange={handleChange} name="price" value={newProduct.price} type="text" 
                     placeholder='Enter Price' />

                    <input className="w-[60%] px-2 h-8 border my-1 rounded  text-black dark:text-white dark:border-white border-black" 
                     onChange={handleChange} name="image" value={newProduct.image} type="text"
                     placeholder='Image Url / Address' />

                    <button className='submitbutton px-3 py-2 rounded text-black dark:text-gray-100
                     bg-gray-500 mt-5' type='submit'> Add Product </button>


                </form>
                <p className='mt-8'>{showMsg && msg } </p>
            </div>
        </div>
    )
}

export default CreatePage