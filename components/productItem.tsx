import { useState } from "react";
import Image from "next/image";
import earthShape from "@/public/earth-shape.svg";
// @ts-ignore
import { useGlobalContext } from "@/hooks/useGlobalState.ts";

const ProductItem: React.FC<{product: Product}> = ({ product }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [state, dispatch] = useGlobalContext();
  return (
    <li>
      <div
        onClick={() =>
          dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product })
        }
        onMouseOver={() => setIsMouseOver((prev: boolean) => !prev)}
        onMouseOut={() => setIsMouseOver((prev: boolean) => !prev)}
        className="relative gradient border-b-2 
        border-b-white"
      >
        <img src={product.img} alt={product.name} />
        <div
          className={`${
            isMouseOver ? "block" : "hidden"
          } absolute flex justify-center items-center inset-0`}
        >
          <Image src={earthShape} width={100} alt="Add to cart icon" />
          <div className={`${isMouseOver ? "block" : "hidden"} absolute z-10`}>
            <span className="stroke text-2xl uppercase">
              {state.savedProducts.find(
                (savedProd) => savedProd.name === product.name
              )
                ? "Buy Me"
                : "Add To Cart"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </li>
  );
};

export default ProductItem;
