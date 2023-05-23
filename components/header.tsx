import Image from "next/image"
import logoMobile from "@/public/favicon.svg"
import logoDesktop from "@/public/logo.svg"
import hd from "@/public/hd-4k.svg"
import { useEffect, useState } from "react"



const Header = () => {

  const [windowWidth, SetWindowWidth] = useState(0)

  function handleWindowResize(): void {
    SetWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    SetWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize)

    // Cleanup this component
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])




  return (
    <nav className="flex justify-between my-8">
      {windowWidth > 700 ? <Image src={logoDesktop} width={192} height={26} alt="logo" /> : <Image src={logoMobile} width={43} height={40} alt="logo" /> } 
      {windowWidth > 700 ? <Image src={hd} width={284} height={24} alt="idk" /> : null}
      <button className="px-6 py-1 border border-white rounded-3xl uppercase">Cart (0)</button>
    </nav>
  )
}

export default Header