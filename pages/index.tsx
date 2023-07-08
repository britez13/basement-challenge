import type { GetStaticProps, InferGetStaticPropsType } from "next"
import Cart from "@/components/cart"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Products from "@/components/products"

export const getStaticProps: GetStaticProps<{products: Product[]}> = async() => {
  const products: Array<Product> = [
    {
        id: "1",
        name: "Black t-shirt",
        description: "Unisex Basic Softstyle T-Shirt",
        price: 7.95,
        img: "/products/shirt.png"
    }, 
    {
        id: "2",
        name: "Black hoodie",
        description: "Black Over The Head Hood",
        price: 13,
        img: "/products/hoodie.png"
    }, 
    {
        id: "3",
        name: "Black cap",
        description: "The basement Logo in a bold, simple form",
        price: 23,
        img: "/products/cap.png"
    }
  ]
  return {
    props: {
      products
    }
  }
 
}

export default function Home({products}: InferGetStaticPropsType<typeof getStaticProps>) {  
  return (
    <div className="lg:mx-auto">
      <Header />
      <Hero />
      <Cart />
      <Products products={products} />
      <Footer />
    </div>
  )
}
