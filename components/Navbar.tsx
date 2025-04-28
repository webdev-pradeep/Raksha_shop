import Link from 'next/link'
import React from 'react'
import { Search } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <>
      <header className=' z-50 md:w-[100%] md:h-15  md:pr-35 md:text-white font-serif bg-[#779792]/70 md:flex md:justify-between md:items-center h-14 flex justify-between items-center fixed top-0 right-0 left-0'> 
      <Link href={"#"} className='md:text-2xl font-semibold md:pl-20 text-xl text-black p-2'>RAKSHA </Link>
      <div className='md:flex md:justify-center  md:items-center md:gap-10'>
        <div className='md:flex md:justify-center md:items-center md:gap-10 md:text-xl hidden'>
        <Link href={"/auth/home"}  className=' transition-all duration-500 ease-linear hover:scale-125 '  >Home</Link>
        <Link href={"/auth/about"}  className=' transition-all duration-500 ease-linear hover:scale-125 '  >About us</Link>
        <Link href={"/auth/product"}  className=' transition-all duration-500 ease-linear hover:scale-125 '  >Product</Link>
        <Link href={"/auth/contact"} className=' transition-all duration-500 ease-linear hover:scale-125 ' >Contact</Link>
        </div>

        <div className='md:flex md:justify-center md:items-center md:gap-5 flex gap-2 p-2 '>
        
        <Link href={'#'}><Search /></Link>
        <Link href={'#'}><ShoppingCart /></Link>
     
        </div>

      </div>
      </header>   
    </>
  )
}

export default Navbar
