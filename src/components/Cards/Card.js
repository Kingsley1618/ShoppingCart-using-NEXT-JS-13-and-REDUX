import React from 'react'
import Image from 'next/image'

import data from "@/libs/data"
export default function Card() {
  return (
    <div className="grid pt-8 lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 bg-[rgb(235,237,244)] z-0 grid-cols-1  md:gap-x-7 gap-y-10 md:gap-y-16 px-3">


{data.map((product)=> {
    return <div key = {product.key} className="rounded-xl text-center bg-[rgb(235,237,244)] shadow-2xl pb-4 hover:bg-[white]">
<Image priority src = {product.image} className="block mx-auto relative top-[-30px] w-[70px] h-[70px] z-0" alt = "card"/>
<h1 className="text-3xl font-bold mt-0">{product.title}</h1>
<div className="text-sm mt-4">{product.content}</div>

<div className="flex justify-center space-x-5 mt-1"> <div className=""><a href = "#" className="text-sm text-[blue] hover:underline">Newest</a></div> <div><a href = "#" className="text-sm text-[blue] hover:underline">Bestsellers</a></div> </div>
    </div>
})}
    


    </div>
  )
}
