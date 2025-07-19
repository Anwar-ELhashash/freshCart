import ProductCard from "../../ProductCard/ProductCard";
import Loading from "../../Loading/Loading";
import useProducts from "../../../hooks/useProducts";

export default function FeaturedProducts() {
  const { products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.log(error);
  }

  return (
    <>
      <section className="bg-gray-50 py-8">
        <div className="container">
          <h3 className="text-2xl font-semibold mb-6">Featured Products:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
