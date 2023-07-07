import ProductItem from "./productItem";

const Products = ({ products }: {products: Array<Product>}) => {  
  return (
    <section className="mx-4">
      <ul className="grid gap-2 grid-cols-1 lg:gap-8 lg:grid-cols-3">
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
