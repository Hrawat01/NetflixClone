import React,{ Suspense,lazy }  from 'react'
import {Link, Route, Routes } from 'react-router-dom'
// import LoginMain from './pages/LoginMain'
// import SignIn from './pages/SignIn'
// import MainLook from './pages/MainLook'
const LoginMain = lazy(() => import('./pages/LoginMain'));
const SignIn = lazy(() => import('./pages/SignIn'));
const MainLook = lazy(() => import('./pages/MainLook'));


const App = () => {

  return (


   <div className='text-6xl '>
 
      <Suspense  fallback={<div className='h-[100vh] w-[100vw] bg-black text-6xl p-[10vw] relative font-bold text-emerald-100 ' >Loading...</div>}>
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
