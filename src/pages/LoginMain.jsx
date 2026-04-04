import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import Header from "../component/header/Header";

const LoginMain = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  return (
    <div>
      <div className="text-white font-extrabold text-[12px]">
        <div className="bg-[url('/netflix_bg.jpeg')] bg-cover h-[100vh]">
          <div className="h-[100vh] w-[100%] bg-[rgba(0,0,0,0.7)]">
            <Header />

            <section className="h-auto md:h-[60%] w-[90%] md:w-[40%] relative left-[5%] md:left-[30%] top-[15%] md:top-[25%] flex flex-col items-center text-center px-4">
              <div className="text-4xl md:text-6xl mb-[15px] flex-wrap font-bold">
                Unlimited movies, shows and more
              </div>
              <div className="text-lg md:text-xl mb-[24px] md:mb-[32px] flex-wrap">
                Starts at ₹149. Cancel at any time.
              </div>
              <div className="text-[14px] md:text-[16px] mb-[20px] md:mb-[25px] flex-wrap">
                Ready to watch? Enter your email to create or restart your
                membership.
              </div>

              {/* <button className="border border-gray-500 rounded-[5px] h-[13%] w-[30%] bg-red-700 text-xl relative bottom-[46px] left-[25%]">Get Started ></button>  */}

              <div className="h-auto md:h-[8vh] w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-2">
                <input
                  className="bg-transparent border border-gray-400 rounded-[5px] h-[50px] md:h-full w-full md:w-[25vw] pl-5 text-[17px]"
                  placeholder="Enter your email address"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-red-600 border border-red-600 rounded-[5px] h-[50px] md:h-full w-full md:w-[200px] flex items-center justify-center md:justify-start md:pl-10 text-lg"
                  onClick={() => {
                    navigate(`/signin?email=${email}`);
                  }}
                >
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="#e3e3e3"
                  >
                    <path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z" />
                  </svg>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
