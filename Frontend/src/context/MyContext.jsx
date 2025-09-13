import React, {useState, createContext} from 'react'

export const MyContext = createContext();

export const MyProvider =({children})=>{

    const [products,setProducts]=useState([]);

    const [msg, setMsg] = useState("");
    const [showMsg, setShowMsg] = useState(false);

    const handleMsgVisiblity = (message) => {
    setMsg(message);
    setShowMsg(true);

    setTimeout(() => setShowMsg(false), 3000); 
  };

    const createProduct = async (newProduct) => {

        if(!newProduct.name || !newProduct.price || !newProduct.image) {
            
            return  {success: false, message: "All fields are required" };
        }

        const res = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        const data = await res.json();

        if (!res.ok) {
        return { success: false, message: "Failed to create product." };
      }

        setProducts([...products, data.data]);
        
        return  {success: true, message: "Product Created  Successfully" };

    } 
    
    const fetchProducts = async()=>{
       const res = await fetch("/api/products") 
       const data = await res.json()
       setProducts(data.data);
    }
    
    const deleteProduct =async(id)=>{
        const res = await fetch(`/api/products/${id}`,{ 
            method: "DELETE",
         })
        const data= await res.json();
        console.log(data.message)
        if(!data.success)
        { return {success:false , message:data.message}

        }
        else {
            const newProductList = products.filter((each)=> each._id !== id)
            setProducts(newProductList)
            return {success:true,message:data.message}
        }

    }

    const updatedProductFun  = async (id, updatedData) => {
        const res = await fetch(`/api/products/${id}`, {
           method: 'PUT',
           headers:{
                'Content-Type': 'application/json'
            },
           body:JSON.stringify(updatedData)
        });
        const data = await res.json(); 
        if (!data.success) {
          return { success: false, message: data.message };  
        }   
        else {
          const updatedProducts = products.map((product) =>
            product._id === id ? data.data : product
          );
          setProducts(updatedProducts);
          return { success: true, message: "Product updated successfully." };}         
        }
    
    return (
    <MyContext.Provider value={{products,setProducts,createProduct,fetchProducts,deleteProduct ,updatedProductFun, handleMsgVisiblity,showMsg ,msg,}} >
        {children}
    </MyContext.Provider>

    )
}