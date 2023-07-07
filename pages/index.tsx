import type { GetStaticProps, InferGetStaticPropsType } from "next"
import Cart from "@/components/cart"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Products from "@/components/products"

export const getStaticProps: GetStaticProps<{products: Product[]}> = async() => {
  const response = await fetch("http://localhost:3000/api/products")
  const products: Product[] = await response.json()
  return {
    props: {
      products
    }
  }
 
}

export default function Home({products}: InferGetStaticPropsType<typeof getStaticProps>) {  
  return (
    <main className="lg:mx-auto">
      <Header />
      <Hero />
      <Cart />
      <Products products={products} />
      <Footer />
    </main>
  )
}
