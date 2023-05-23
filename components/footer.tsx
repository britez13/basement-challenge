import Image from "next/image"
import footer from "@/public/footer.svg"

const Footer = () => {
  return (
    <footer>
        <Image src={footer} alt="Footer image" />
    </footer>
  )
}

export default Footer