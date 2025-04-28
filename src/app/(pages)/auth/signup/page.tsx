import { CircleUserRound, Lock, MailOpen } from 'lucide-react'
import React from 'react'

const signUpPage = () => {
  return (
    <>
    <div className='h-screen w-[100%] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 flex justify-center items-center'>
     
      <form  className='h-70 p-3 rounded-2xl md:w-[400px] md:h-[350px]  bg-white flex justify-center items-center hover:shadow-xl hover:shadow-black/50  '>
        <ul  className='  grid grid-cols-1 gap-4'>
          <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
        <li className='flex gap-2 pl-5 p-1 rounded-xl bg-white items-center shadow shadow-black/70 '>
      <CircleUserRound className='text-blue-500' />
        <input type="text" placeholder='Name' required className='outline-none text-xl'/>
        </li>
        <li className='flex gap-2 pl-5 p-1 rounded-xl bg-white items-center shadow shadow-black/70 '>
        <MailOpen  className='text-blue-500'/>
        <input type="email" name="email" placeholder='E-mail' required className='outline-none text-xl' />
        </li>
        <li className='flex gap-2 pl-5 p-1 rounded-xl bg-white items-center shadow shadow-black/70 '>
        <Lock className='text-blue-500' />
          <input type="password" name="password" placeholder='Password' required className='outline-none text-xl' />
        </li>
        <button className='text-2xl bg-gradient-to-l to-pink-300 from-blue-300 p-1 active:bg-blue-300 transition-all duration-700 ease-in-out shadow-xl shadow-black/70 active:shadow-2xs rounded-2xl text-white font-medium '>CREATE ACCOUNT </button>
        {/* <link href=''></link> */}
        </ul>
        
      </form>
     
    </div>
    </>
  )
}

export default signUpPage
