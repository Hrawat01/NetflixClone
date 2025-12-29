import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SignIn from '../../pages/SignIn'
import LoginMain from '../../pages/LoginMain'

const Header = () => {
     const location = useLocation();

  return (
   
       <nav className="fixed h-[75px] w-full  flex  flex-wrap justify-between items-center z-50 ">
    <img className="h-[65px] w-[155px] ml-[100px]" src="imgi_2_Netflix_Logo_PMS.png" alt="" />
                    {location.pathname == '/mainlook' && (  <form action="">
<input className='bg-transparent border border-gray-200  rounded-2xl text-2xl text-white p-2 h-[5vh] w-[27vw] mr-5 ' type="text" placeholder='Search ' />
<button className='border border-gray-500  rounded-2xl text-xl text-white px-4 py-1 bg-red-600'>Search</button>
</form>
)}
    <div className="mr-[100px] bg-inherit flex-wrap ">
        <select className="bg-inherit rounded-[5px] border border-gray-500 h-[5vh] w-[18vh] text-center bg-black text-[15px] text-emerald-50 " name="" id="">
            <option className=' bg-black'  value="">  English</option>
            <option className=' bg-black' value="">Hindi</option>
        </select>


        {/* hide when we are in signIn page */}
   

     {location.pathname == '/' && (
         <Link className="rounded-[5px] border border-gray-500 h-[25vh] w-[13vw] ml-[5px] bg-red-600 text-[13px] p-2 text-white" to={'/signin'} element={<SignIn /> }>Sign In</Link>
        )}
    
    </div>
   </nav>
   
  )
}

export default Header
