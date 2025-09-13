import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/ui/Navbar'
import './index.css'
import { MyProvider } from './context/MyContext'  
function App() {


  return (
    <div className='max-w-screen min-h-screen bg-white text-gray-900  dark:bg-gray-900
     dark:text-gray-100 transition-colors duration-300'>
  
      <MyProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </MyProvider>
  

    </div>
  )
}

export default App
