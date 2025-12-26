import React,{ Suspense }  from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import LoginMain from './pages/LoginMain'
import SignIn from './pages/SignIn'
import MainLook from './pages/MainLook'


const App = () => {
  return (


   <div className='text-6xl '>
    
    {/* header */}

   {/* <div className='absolute z-1 flex top-6 right-6'>
       <Link className='text-green-700 mr-5 text-[22px]' to={'/'}>Home</Link>
     <Link className='text-green-700 mr-5 text-[22px]' to={'/agent'}>Agents</Link>
     <Link className='text-green-700 mr-5 text-[22px]' to={'/project'}>Projects</Link>
   </div> */}




      <Suspense fallback={<div>Loading...</div>}>
    <Routes>
     <Route path='/' element={<LoginMain />} />
     <Route path='/signin' element={<SignIn />} />
     <Route path='/mainlook' element={<MainLook />} />
    </Routes>
      </Suspense>
   </div>
  
  )
}

export default App
