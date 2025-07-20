import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";

export default function AllCategories() {
  const { products, isLoading, isError, error } = useProducts();

  if (isLoading || !products) {
    return <Loading />;
  }

  if (isError) {
    console.log(error);
  }

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container space-y-15">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">All Products</h1>
            <p className="text-gray-600">Allot of new products for you take a tour here</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.isArray(products) &&
              products.map((product) => <ProductCard key={product.id} productInfo={product} />)}
          </div>
        </div>
      </section>
    </>
  );
}
