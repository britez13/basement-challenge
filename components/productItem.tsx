import Image from "next/image"
import addCart from '@/public/addtoCart.svg'
import { Product } from "@/models/product"

const ProductItem = ({product}) => {
  return (
    <li>
        <div className="relative gradient border-b-2 border-b-white">
          <img src={product.img} alt={product.name} />
          <div className="absolute flex justify-center items-center inset-0">
            <Image src={addCart} width={150} alt="Add to cart icon" />
          </div>
        </div>

        <div className="flex justify-between">
            <p>{product.name}</p>
            <p>${product.price}</p>
        </div>
        
    </li>
  )
}

export default ProductItem