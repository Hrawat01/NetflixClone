import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SignIn from '../../pages/SignIn'
import LoginMain from '../../pages/LoginMain'

const Header = () => {
     const location = useLocation();

  return (
   
       <nav className="h-[75px] w-[100%]  flex  flex-wrap justify-between items-center ">
    <img className="h-[65px] w-[155px] ml-[100px]" src="imgi_2_Netflix_Logo_PMS.png" alt="" />
    <div className="mr-[100px] bg-inherit flex-wrap">
        <select className="bg-inherit rounded-[5px] border border-gray-500 h-[5vh] w-[18vh] text-center bg-black text-[15px] text-emerald-50 " name="" id="">
            
            <option className=' bg-black'  value="">  English</option>
            <option className=' bg-black' value="">Hindi</option>
        </select>


        {/* hide when we are in signIn page */}

     {location.pathname != '/signin' && (
         <Link className="rounded-[5px] border border-gray-500 h-[25vh] w-[13vw] ml-[5px] bg-red-600 text-[13px] p-2" to={'/signin'} element={<SignIn /> }>Sign In</Link>
        )}
    
    </div>
   </nav>
   
  )
}

export default Header
