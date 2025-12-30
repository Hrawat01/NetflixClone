import axios from "axios";
import React,{ Suspense,lazy }  from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import Search from './component/header/Search';
import { useEffect, useState } from "react";
// import LoginMain from './pages/LoginMain'
// import SignIn from './pages/SignIn'
// import MainLook from './pages/MainLook'
const LoginMain = lazy(() => import('./pages/LoginMain'));
const SignIn = lazy(() => import('./pages/SignIn'));
const MainLook = lazy(() => import('./pages/MainLook'));


const App = () => {
   //   api
  const [data, setData] = useState([]);

  const API_BASE = "https://api.tvmaze.com";

  const getData = async () => {
    const response = await axios.get(`${API_BASE}/shows?page=0`);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (


   <div className='text-6xl '>
 
      {/* <Suspense  fallback={<div className='h-[100vh] w-[100vw] bg-black text-6xl p-[10vw] relative font-bold text-emerald-100 ' >Loading...</div>}> */}
      <Suspense  fallback={<div className="bg-black h-[100vh] w-[100vw] p-4 space-y-4 flex flex-col justify-evenly items-center ">
  <div className="animate-pulse bg-gray-700 h-11 w-3/4 rounded-2xl"></div>
  <div className="animate-pulse bg-gray-700 h-40 w-full rounded"></div>
  <div className="animate-pulse bg-gray-700 h-40 w-full rounded"></div>
  <div className="animate-pulse bg-gray-700 h-40 w-full rounded"></div>
</div>}>
    <Routes>
     <Route path='/' element={<LoginMain />} />
     <Route path='/signin' element={<SignIn />} />
     <Route path='/mainlook' element={<MainLook data={data}/>} />
     <Route path='/search' element={<Search data={data} />} />
    </Routes>
      </Suspense>
   </div>
  
  )
}

export default App
