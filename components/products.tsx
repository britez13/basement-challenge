import { Product } from "@/models/product";
import productsData from "@/data/products.json"
import ProductItem from "./productItem";

const Products = () => {
  
  return (
    <section>
      <ul className="grid gap-2 grid-cols-1 lg:gap-8 lg:grid-cols-3">
        {
            productsData.map(
                (product: Product) => <ProductItem key={product.id} product={product} />
            )
        }
      </ul>
    </section>
  );
};

export default Products;
