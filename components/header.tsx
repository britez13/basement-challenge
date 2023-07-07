import Image from "next/image";
import hd from "@/public/hd-4k.svg";
import { useEffect, useState } from "react";
// @ts-ignore
import { useGlobalContext } from "../hooks/useGlobalState.ts";

function Header() {
  const [windowWidth, SetWindowWidth] = useState(0);

  const [state, dispatch] = useGlobalContext();

  function handleWindowResize(): void {
    SetWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    SetWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Cleanup this component
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="mx-4 flex justify-between my-8">
      {windowWidth > 700 ? (
        <h2 className="text-3xl">basement</h2>
      ) : (
        <h2 className="text-3xl">b.</h2>
      )}
      {windowWidth > 700 ? (
        <Image src={hd} width={284} height={24} alt="idk" />
      ) : null}
      <button
        onClick={() => dispatch({ type: "TOGGLE_CART" })}
        className="px-6 py-1 border border-white rounded-3xl uppercase"
      >
        Cart ({state.savedProducts.length})
      </button>
    </nav>
  );
}

export default Header;
