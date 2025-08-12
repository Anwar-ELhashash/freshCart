import TimeLeft from "../../components/TimeLeft/TimeLeft";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";
import OffersSkeleton from "../../components/Skeleton/OffersSkeleton";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function Offers() {
  const { products, isLoading } = useProducts();
  useScrollTop();
  if (isLoading || !products) {
    return <OffersSkeleton />;
  }

  const deals = products.filter((product) => product.priceAfterDiscount);
  return (
    <>
      <PageMetaData title="Offers" />
      <section className="py-8">
        <div className="container">
          <h1 className="text-center text-2xl font-semibold">All Offers</h1>
          {/* Counter */}
          <div>
            <h3 className="text-xl font-bold mb-2">Deals Of The Day:</h3>
            <div className="flex gap-3 items-center">
              <p className="text-gray-700">Offer ends in: </p>
              <TimeLeft />
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 pt-8">
            {Array.isArray(deals) &&
              deals.map((deal) => <ProductCard key={deal.id} productInfo={deal} />)}
          </div>
        </div>
      </section>
    </>
  );
}
