import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'

const LoginMain = () => {
  return (
    <div>
       <div className="text-white font-extrabold text-[12px]">
    <div className="bg-[url('imgi_45_IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_small.jpg')] bg-cover h-[100vh]">
    <div className="h-[100vh] w-[100%] bg-[rgba(0,0,0,0.7)]">
   <nav className="h-[75px] w-[100%]  flex  flex-wrap justify-between items-center ">
    <img className="h-[65px] w-[155px] ml-[100px]" src="imgi_2_Netflix_Logo_PMS.png" alt="" />
    <div className="mr-[100px] bg-inherit flex-wrap">
        <select className="bg-inherit rounded-[5px] border border-gray-500 h-[5vh] w-[18vh] text-center bg-black" name="" id="">
            
            <option  value="">  English</option>
            <option value="">Hindi</option>
        </select>
        <Link className="rounded-[5px] border border-gray-500 h-[25vh] w-[13vw] ml-[5px] bg-red-600 text-[13px] p-2" to={'/signin'} element={<SignIn /> }>Sign In</Link>
    </div>
   </nav>


   
<section className=" h-[60%] w-[40%] relative left-[30%] top-[25%] flex flex-col  items-center text-center">
    <div className="text-6xl mb-[15px] flex-wrap">Unlimited movies, shows and more</div>
    <div className="text-xl mb-[32px] flex-wrap">Starts at ₹149. Cancel at any time.</div>
    <div className="text-[16px] mb-[25px] flex-wrap">Ready to watch? Enter your email to create or restart your membership.</div>

   
    {/* <button className="border border-gray-500 rounded-[5px] h-[13%] w-[30%] bg-red-700 text-xl relative bottom-[46px] left-[25%]">Get Started ></button>  */}

    
    <div className="h-[8vh] w-[100%] flex justify-center gap-2 flex-wrap">
        <input className="bg-transparent border border-gray-400  rounded-[5px] h-[100%] w-[25vw] pl-5 text-[17px]" placeholder="Enter your email address" type="text" />
        <button className="bg-red-600 border border-red-600  rounded-[5px] h-[100%] w-[200px] flex items-center pl-10">Get Started <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z"/></svg>
             </button>
    </div>
    
</section>



    
</div>
</div>

</div>
    </div>
   
  )
}

export default LoginMain
