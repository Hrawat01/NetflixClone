import React, { useState } from 'react'
import Header from '../component/header/Header';
import MainLook from './MainLook';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
      const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  return (
   <div className="min-h-screen bg-zinc-950 text-zinc-50">

      <div className="pointer-events-none fixed inset-0">
     <div className="bg-[url('imgi_45_IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_small.jpg')] bg-cover h-[100vh]" />    {/* bg image  */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" /> {/* black filter */}
      </div>


      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4">


        <div className='absolute  -left-40'> <Header /></div>
      
        <main className="flex flex-1 items-center justify-center pb-12">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur sm:p-8">
            <div className="text-2xl font-bold">Sign In</div>
            <div className="mt-2 text-sm text-zinc-400">Use any email and any password (demo login).</div>

            {/* <form className="mt-6 space-y-4" onSubmit={handleSubmit}> */}
            <form className="mt-6 space-y-4" >
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-300">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-rose-500/60"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-300">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-white/10 bg-zinc-950/60 px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-rose-500/60"
                />
              </div>

            

              <button
                type="submit"
                // disabled="true"
                onClick={()=>navigate('/mainlook')}
                className="w-full rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-glow hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
             Sign In
                
                    
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SignIn
