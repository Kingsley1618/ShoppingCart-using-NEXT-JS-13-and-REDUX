
import React from 'react'
import {BiSolidGrid} from "react-icons/bi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {IoIosContact} from "react-icons/io"
import { useSelector } from 'react-redux'
import Link from 'next/link'
function Navbar() {
  const cartItem = useSelector((state)=> state.cart)


  return (
    <div className="flex px-5 justify-between z-40 sticky top-0 h-[70px] items-center bg-[black] text-[rgb(134,134,134)] font-semibold">
<img src = "/envato.png" alt = "logo" className="w-25 h-6"/>


<div>
  <ul className="flex lg:space-x-7 space-x-3 text-[13px] items-center flex-wrap">
    <li className="cursor-pointer lg:inline-block hidden">Forums</li>
    <li className="cursor-pointer lg:inline-block hidden">Start Selling</li>
    <li className="flex items-center lg:flex hidden space-x-2 cursor-pointer"><BiSolidGrid /> <div>Our Products</div></li>
    <li className="relative"><Link href= "/Carts" scroll = {false}><AiOutlineShoppingCart className="text-[24px] cursor-pointer text-white"/> <div className="absolute text-white text-[15px] font-bold top-[9px] right-[-5px]">{cartItem.length}</div></Link></li>
   
  <li className="text-[24px] lg:hidden block cursor-pointer text-white"><IoIosContact /></li>
  </ul>
</div>
    </div>
  )
}

export default Navbar