import { useState } from "react";
import type { ProductCardType } from "../types/ProductCardType"

interface ProductCardProps {
    product:ProductCardType;
}

const ProductCard = ({product}:ProductCardProps) => {

    const [item] = useState<ProductCardType>(product)
  return (
    <div className="bg-white shadow-md rounded-2xl w-[250px] h-[530px]">
        <img className="w-full h-60 object-cover rounded-2xl" src={item.image} alt="" />
        <div className="my-5">
            <h1 className="font-bold  text-2xl">{item.name}</h1>
            <p className="text-center text-gray-500 px-3 mt-3">{item.description}</p>
            <div className="flex justify-center gap-4 my-5">
                <div className="size-5 rounded-full bg-red-400"></div>
                <div className="size-5 rounded-full bg-black"></div>
                <div className="size-5 rounded-full bg-yellow-400"></div>
            </div>
            
            <div className="flex mt-6 justify-around">

            <p className="font-bold text-xl">{item.price}$</p>
            <button className="border rounded-xl font-semibold px-4 py-1">Add to Cart</button>
            </div>
        </div>


    </div>
  )
}

export default ProductCard
