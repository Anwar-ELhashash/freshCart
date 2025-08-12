import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import ProductCard from "../../components/ProductCard/ProductCard";
import MenCategorySkeleton from "../../components/Skeleton/MenCategorySkeleton";
import useProducts from "../../hooks/useProducts";
import useScrollTop from "../../hooks/useScroll";

export default function MenCategoryProducts() {
  const { products, isLoading, isError, error } = useProducts();
  useScrollTop();
  if (isLoading || !products) {
    return <MenCategorySkeleton />;
  }
  if (isError) {
    console.log(error);
  }

  const menProducts = Array.isArray(products)
    ? products.filter((product) => product.category._id === "6439d5b90049ad0b52b90048")
    : [];

  return (
    <>
      <PageMetaData title="Men Products" />
      <section className="bg-gray-100 py-10">
        <div className="container space-y-15">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Men's Products</h1>
            <p className="text-gray-600">Allot of new products for men take a tour here</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.isArray(menProducts) &&
              menProducts.map((menProduct) => (
                <ProductCard key={menProduct.id} productInfo={menProduct} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
