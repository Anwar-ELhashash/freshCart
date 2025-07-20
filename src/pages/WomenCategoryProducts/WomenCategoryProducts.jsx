import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";

export default function WomenCategoryProducts() {
  const { products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.log(error);
  }

  const womenProducts = Array.isArray(products)
    ? products.filter((product) => product.category._id === "6439d58a0049ad0b52b9003f")
    : [];

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container space-y-15">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Women's Products</h1>
            <p className="text-gray-600">Allot of new products for women take a tour here</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {womenProducts.map((womenProduct) => (
              <ProductCard key={womenProduct.id} productInfo={womenProduct} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
