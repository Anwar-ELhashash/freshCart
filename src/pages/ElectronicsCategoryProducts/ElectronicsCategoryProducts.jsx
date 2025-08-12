import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import ProductCard from "../../components/ProductCard/ProductCard";
import ElectronicsCategorySkeleton from "../../components/Skeleton/ElectronicsCategorySkeleton";
import useProducts from "../../hooks/useProducts";
import useScrollTop from "../../hooks/useScroll";

export default function ElectronicsCategoryProducts() {
  const { products, isLoading, isError, error } = useProducts();
  useScrollTop();
  if (isLoading || !products) {
    return <ElectronicsCategorySkeleton />;
  }

  if (isError) {
    console.log(error);
  }

  const electronicProducts = Array.isArray(products)
    ? products.filter((product) => product.category._id === "6439d2d167d9aa4ca970649f")
    : [];

  return (
    <>
      <PageMetaData title="Electronic Products" />
      <section className="bg-gray-100 py-10">
        <div className="container space-y-15">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Electronic Products</h1>
            <p className="text-gray-600">
              Allot of new electronic products for you take a tour here
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.isArray(electronicProducts) &&
              electronicProducts.map((elecProduct) => (
                <ProductCard key={elecProduct.id} productInfo={elecProduct} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
