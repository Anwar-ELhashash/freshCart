import Loading from "../../Loading/Loading";
import ProductCard from "../../ProductCard/ProductCard";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import useProducts from "../../../hooks/useProducts";

export default function RelatedProducts({ productDetails }) {
  const { category } = productDetails;

  const { products, isLoading } = useProducts({ category: category._id });

  if (isLoading || !products) {
    return <Loading />;
  }

  return (
    <>
      <div className="container py-10 space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">You May Also Like</h2>
          <div className="flex gap-3">
            <button className="related-prev-btn bg-black/5 size-7 text-black/70 rounded-full">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="related-next-btn bg-black/5 size-7 text-black/70 rounded-full">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        {/* Cards */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          loop={true}
          navigation={{ nextEl: ".related-next-btn", prevEl: ".related-prev-btn" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 6,
            },
          }}
        >
          {Array.isArray(products) &&
            products.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard productInfo={product} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
