import { Link } from 'lucide-react'
import React from 'react'

const loginPage = () => {
  return (
    <>
     <div className='h-screen w-[100%] bg-gradient-to-r from-purple-700 to-blue-600 flex justify-center items-center'>
     
     <form  className='h-70 p-3 rounded-b-sm md:w-[400px] md:h-[350px] rounded-tl-[100px] md:rounded-tl-[130px]  bg-blue-700 flex justify-center items-center hover:shadow-xl hover:shadow-black/50  '>
       <ul  className='  grid grid-cols-1 gap-4'>
         <h1 className='text-2xl font-bold text-center text-white'>Sign Up</h1>
       <input type="text" placeholder='Username' required className='outline-none text-xl border-2 p-1 pl-3 rounded-xl'/>
         <input type="password" name="password" placeholder='Password' required className='outline-none text-xl border-2 p-1 pl-3 rounded-xl' />
         <li className='flex justify-between items-center'>
         <input type='checkbox' className='h-6 w-6 outline-0'/>  
         <p className='text-md text-white underline'>Forget Password</p>       
         </li>
       <button className='text-2xl bg-gradient-to-l to-blue-700 from-purple-600 p-1 active:bg-blue-300 transition-all duration-700 ease-in-out shadow-xl shadow-black/70 active:shadow-2xs rounded-2xl text-white font-medium '>CREATE ACCOUNT </button>
       
       </ul>
       
     </form>
    
   </div>
    </>
  )
}

export default loginPage
