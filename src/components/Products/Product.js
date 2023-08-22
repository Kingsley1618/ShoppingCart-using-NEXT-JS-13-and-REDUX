'use client'
import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { userActions } from '@/redux/store'
export async function ProductData() {
    const res = await fetch("https://dummyjson.com/products")

    return res.json()
}


export default async function Product() {
    const dispatch = useDispatch()
   async function AddCart(newItems) {
        
       dispatch(userActions.addToCart(newItems))
    }
const products = await ProductData()

  return (
    <div className="mt-7 grid bg-[rgb(235,237,244)] md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-x-8 gap-y-8 mx-8">
        
        
        {products.products.map((product)=> {
        return <div className="flex flex-col bg-black text-white rounded-2xl py-4 px-3" key = {product.id}>
          

           <div className="flex flex-col space-y-3">
<div className="text-[13px] text-center">{product.title}</div>

<div className="font-bold text-[22px] text-center">${product.price}</div>
<div className="text-center text-[12px]">{product.description}</div>

<div className="text-[12px] text-center">stock : {product.stock} left</div>
<div><button type="button" onClick = {()=> {
    AddCart({id:product.id, title:product.title,images:product.images[0],description:product.description,price:product.price, amount : 1})
}} className="bg-none text-[14px] px-5 py-1 rounded-lg block mx-auto border border-[rgb(0,122,206)] text-[rgb(0,122,206)] hover:bg-[white]">Buy Now</button></div>
            </div>

            <img src = {product.images[0]} className="w-[200px] rounded-2xl block mx-auto h-[150px] mt-3" alt = "products" />

            </div>
    })}</div>
  )
}
