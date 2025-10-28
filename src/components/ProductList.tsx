import { useState } from "react";
import type { ProductCardType } from "../types/ProductCardType"
import ProductCard from "./ProductCard"

interface ProductListProps {
    list: ProductCardType[];
}

 const ProductList = ({list}:ProductListProps) => {
    const [productList] = useState<ProductCardType[]>(list)
  return (
    <div className="flex flex-wrap justify-around">
{productList.map((items,index) =>(
    <ProductCard product={items} key={index}/>
))}
    </div>
  )
}


export default ProductList