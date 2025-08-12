import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import ProductCard from "../../components/ProductCard/ProductCard";
import WomenCategorySkeleton from "../../components/Skeleton/WomenCategorySkeleton";
import useProducts from "../../hooks/useProducts";
import useScrollTop from "../../hooks/useScroll";

export default function WomenCategoryProducts() {
  const { products, isLoading, isError, error } = useProducts();
  useScrollTop();
  if (isLoading || !products) {
    return <WomenCategorySkeleton />;
  }

  if (isError) {
    console.log(error);
  }

  const womenProducts = Array.isArray(products)
    ? products.filter((product) => product.category._id === "6439d58a0049ad0b52b9003f")
    : [];

  return (
    <>
      <PageMetaData title="Women Products" />
      <section className="bg-gray-100 py-10">
        <div className="container space-y-15">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Women's Products</h1>
            <p className="text-gray-600">Allot of new products for women take a tour here</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.isArray(womenProducts) &&
              womenProducts.map((womenProduct) => (
                <ProductCard key={womenProduct.id} productInfo={womenProduct} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
