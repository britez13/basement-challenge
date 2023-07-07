// @ts-ignore
import { useGlobalContext } from "@/hooks/useGlobalState.ts";
import CartItem from "./cartItem";

function Cart() {
  const [state, dispatch] = useGlobalContext();
  const initialValue: number = 0;

  return (
    <>
      <div
        id="cart"
        className={`${
          state.isCartOpen ? "open-cart" : ""
        } fixed flex flex-col justify-between z-20 pt-4 bg-black
      top-0 right-0 w-full min-h-[100%] translate-x-full transition-transform ease-linear duration-[400ms] 
      lg:border-l lg:border-b lg:border-white lg:w-[45%] lg:min-h-[80vh]`}
      >
        <div className="px-4 flex-1 flex flex-col">
          <div className="flex justify-end">
            <button
              className="uppercase"
              onClick={() =>
                dispatch({
                  type: "TOGGLE_CART",
                })
              }
            >
              → Close
            </button>
          </div>
          <h2 className="mt-4 tracking-wide text-4xl leading-none uppercase text-center lg:text-[4.6rem]">
            Your <span className="stroke lg:inline-block">Cart</span>
          </h2>
          <div
            className={`${
              state.savedProducts.length ? "overflow-y-scroll" : ""
            } mt-4 flex-1 h-[100%] lg:max-h-[380px]`}
          >
            {state.savedProducts.length ? (
              <ul className="flex flex-col gap-2">
                {" "}
                {state.savedProducts.map((product) => (
                  <CartItem key={product.id} product={product}></CartItem>
                ))}{" "}
              </ul>
            ) : (
              <h3 className="text-center">
                Empty cart, time for start adding! 😉{" "}
              </h3>
            )}
          </div>
        </div>
        <div className="px-4 lg:px-0 lg:flex lg:items-center lg:border-t lg:border-white">
          <div
            className="border-b py-4 boder-white pb-2 h-full flex justify-between lg:grow lg:border-none 
        lg:justify-start lg:items-center lg:pb-0 lg:py-0 lg:gap-2 lg:px-6"
          >
            <h3 className="uppercase lg:text-2xl">
              Total<span className="hidden lg:inline-block lg:mr-1">:</span>
            </h3>
            <span className="lg:text-2xl">
              {" "}
              ${
              // @ts-ignore
              state.savedProducts.reduce<number>(
                (acc: number, obj: SavedProduct) => (acc + obj.price * obj.quantity),
                initialValue
              )}{" "}
            </span>
          </div>
          <div className="py-4 lg:px-6 lg:grid lg:place-content-center lg:border-l lg:border-white">
            <button
              className="mx-auto w-full"
              onClick={() => {
                alert(`Order confirmed! Total amount: $${
                  // @ts-ignore
                  state.savedProducts.reduce<number>(
                    (acc: number, obj: SavedProduct) => (acc + obj.price * obj.quantity),
                    initialValue
                  )} Thank you for shopping with us!`)
                  dispatch({type: "RESET_CART"})
              }
            }
            >
              <h3 className="stroke text-4xl text-center uppercase lg:text-2xl">
                Checkout
              </h3>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          state.isCartOpen ? "block" : "hidden"
        } fixed z-10 inset-0 bg-black opacity-50`}
      ></div>
    </>
  );
}

export default Cart;
