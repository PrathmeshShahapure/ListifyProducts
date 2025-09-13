import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CgAddR } from "react-icons/cg";
import { CiSun } from 'react-icons/ci';
import { FaMoon} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [darkMode,setDarkTheme]=useState( ()=>localStorage.getItem('theme')==='dark');

  useEffect(()=>{
    const root=document.documentElement;
    if(darkMode){
      root.classList.add("dark"); 
      localStorage.setItem('theme','dark');
    }
    else{
      root.classList.remove("dark");
      localStorage.setItem('theme','light');
    }

  },[darkMode])

  const handleTheme=()=>{
    setDarkTheme(!darkMode);
  }

  return (
    <div className=" w-full bg-gray-400 dark:bg-gray-800 flex justify-center ">
      <div className=' w-[90%]  h-16 flex items-center justify-between px-4 md:px-8  '> 
        <Link to="/" className='text-2xl font-bold tracking-wide hover:text-white transition' >
              Product Card 
         </Link>
       
       <div className='flex  sm:gap-2 md:gap-8'> 
        <Link to="/create"> 
        <button className='hover:text-white mt-1.5' type="button">
             <CgAddR fontSize={30}/> 
        </button> 
        </Link>
        <button  onClick={handleTheme} className='hover:text-white' > { (darkMode) ? <CiSun fontSize={30}/> : <FaMoon fontSize={30}/> } </button>
         </div>
        </div>
    </div>
  )
}

export default Navbar