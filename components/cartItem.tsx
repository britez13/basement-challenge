import { useGlobalContext } from "@/hooks/useGlobalState";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const CartItem: React.FC<{product: SavedProduct}> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("s");
  const [state, dispatch] = useGlobalContext();
  const sizes = ["s", "m", "l", "xl"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div
      key={product.id}
      className="flex p-1 gap-[6px] border border-white lg:gap-2 lg:p-2"
    >
      <div className="min-w-[110px] max-w-[110px] gradient grid place-content-center">
        <Image src={product.img} alt={product.name} width={100} height={100} />
      </div>
      <div className="grow flex flex-col justify-between">
        <div>
          <h2 className="text-sm uppercase">{product.name}</h2>
          <h3 className="text-[#999] text-xs">{product.description}</h3>
        </div>
        <div className="text-xs mt-2">
          <div className="mt-1">
            <span>
              Quantity:{" "}
              <span className="border border-white rounded-[16px] py-[3px] px-2 ml-1">
                {" "}
                <button
                  onClick={() =>
                    dispatch({
                      type: "DECREASE_PRODUCT_QUANTITY",
                      payload: product,
                    })
                  }
                >
                  -
                </button>{" "}
                <span className="mx-1"> {product.quantity} </span>{" "}
                <button
                  onClick={() =>
                    dispatch({
                      type: "INCREASE_PRODUCT_QUANTITY",
                      payload: product,
                    })
                  }
                >
                  +
                </button>{" "}
              </span>{" "}
            </span>
          </div>
          <div className="mt-1 lg:flex lg:flex-row lg:items-center lg:justify-between">
            <span className="flex items-center gap-1 select-size">
              Size:
              {sizes.map((size) => (
                <span key={size} >
                <input
                type="radio"
                className="hidden"
                onChange={handleChange}
                name={`${product.name}-size`}
                value={size}
                id={`${product.name}-${size}`}
                checked={selectedSize === size}
              />
              <label className="grid place-content-center" htmlFor={`${product.name}-${size}`}>
                  {size.toUpperCase()}
              </label>
              </span>
              ))}
            </span>
            <span className="block lg:inline-block lg:text-2xl">
              ${product.price}
            </span>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CartItem;
