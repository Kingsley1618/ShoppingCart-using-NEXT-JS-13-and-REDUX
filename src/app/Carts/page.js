'use client'
import { userActions } from '@/redux/store'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import Link from 'next/link'

export default function Cart() {
  const dispatch = useDispatch()
  const cartProduct = useSelector((state)=> state.cart)
 
  const cartTotal = useSelector((state)=> state.total)

  useEffect(()=> {
dispatch(userActions.calculateTotal())
  },[cartProduct])
  return (
  <div className={cartProduct.length === 0? "flex flex-col justify-center items-center h-screen w-full": "" }>
   <Link href="/" scroll = {false}> <button type="button" className="bg-[black] md:mt-5 mt-6 block mx-auto text-white px-3 py-1 rounded-xl hover:shadow-2xl transition duration-300 ease-in-out">Back to Products</button></Link>
    <div className="grid grid-cols-1 gap-y-6 mx-3 mt-4">
     {cartProduct.map((item)=> {
return <div key = {item.id} className="flex md:flex-row flex-col items-center space-x-6 justify-between bg-[rgb(235,237,244)] p-3 rounded-3xl shadow-md">

<img src = {item.images} alt="product" className="w-[180px] h-[140px] rounded-2xl"/>
<div className="md:w-[500px]">
<div className="md:text-left text-center font-bold">{item.title}</div>
<div className="md:text-left text-center font-bold">${item.price}</div>
<div className="md:text-left text-center">{item.description}</div>
<div className="flex flex-col space-y-1 items-center mt-1"><button className="px-2 py-0 bg-[black] text-2xl text-white" onClick = {()=> dispatch(userActions.increaseItem({id:item.id}))}>+</button><div>{item.amount}</div>   <button onClick = {()=> dispatch(userActions.decreaseItem({id:item.id}))} className="px-2 text-2xl py-0 bg-[black] text-white">-</button></div>

</div>
<div><button type="button" onClick = {()=> {
  dispatch(userActions.removeItem({id:item.id}))
}} className="bg-[black] md:mt-0 mt-3 block mx-auto text-white px-3 py-1 rounded-xl hover:shadow-2xl transition duration-300 ease-in-out">Remove Item</button></div>
</div>
      })}
     {cartProduct.length > 0?<div className="flex justify-between mx-4">
<div className="font-bold text-[25px]">TOTAL</div>
<div className="font-bold text-[25px]">${cartTotal}</div>
      </div>
: null}
    </div>
    {cartProduct.length > 0? null :  <div className="font-bold text-[30px]">CART IS EMPTY</div>}
   </div>
  )
}
