import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Products from "@/components/products"

export default function Home() {
  return (
    <main className="mx-4 lg:mx-auto lg:max-w-[1250px]">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </main>
  )
}
