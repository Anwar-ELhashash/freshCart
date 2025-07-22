import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import ProductCard from "../../ProductCard/ProductCard";
import TimeLeft from "../../TimeLeft/TimeLeft";
import useProducts from "../../../hooks/useProducts";
import HomeDealsSkeleton from "../../Skeleton/HomeDealsSkeleton";

export default function HomeDeals() {
  const { products, isLoading, isError, error } = useProducts();

  if (isLoading || !products) {
    return <HomeDealsSkeleton />;
  }

  if (isError) {
    console.log(error);
  }

  const deals = Array.isArray(products)
    ? products.filter((product) => product.priceAfterDiscount).slice(0, 5)
    : [];

  return (
    <>
      <section className="py-8">
        <div className="container">
          {/* Counter */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Deals Of The Day:</h3>

              <div className="flex gap-3 items-center">
                <p className="text-gray-700">Offer ends in: </p>
                <TimeLeft />
              </div>
            </div>

            <Link
              to="/offers"
              className="text-primary-500 text-15 flex items-center transition-all duration-200 gap-2 hover:underline hover:text-primary-600"
            >
              <span>View All Deals</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
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
