import { Link } from "react-router";
import slideImage1 from "./../../../assets/images/slider-image-1.png";
import slideImage2 from "./../../../assets/images/slider-image-3.jpeg";
import slideImage3 from "./../../../assets/images/slider-image-5.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${slideImage1}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay text-white py-24 bg-gradient-to-r from-primary-600/60 to-primary-600/40">
              <div className="container space-y-5">
                <h1 className="text-2xl font-bold">
                  Fast & <br /> Free Delivery
                </h1>
                <p>Same day delivery available</p>
                <div className="buttons space-x-2">
                  <Link
                    to="/shop"
                    className="btn bg-white hover:bg-primary-600 hover:text-white border-2 border-white text-primary-600"
                  >
                    shop now
                  </Link>
                  <Link
                    to="/details"
                    className="btn border-2 border-white bg-transparent text-white hover:text-white hover:bg-primary-600"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${slideImage2}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay text-white py-24 bg-gradient-to-r from-primary-600/60 to-primary-600/40">
              <div className="container space-y-5">
                <h1 className="text-2xl font-bold">
                  Fresh Organic Produce <br /> Delivered to Your Door
                </h1>
                <p>
                  Get 20% off on your first order with code: <span>FRESH20</span>
                </p>
                <div className="buttons space-x-2">
                  <Link
                    to="/shop"
                    className="btn bg-white hover:bg-gray-200 border-2 border-white text-primary-600"
                  >
                    shop now
                  </Link>
                  <Link
                    to="/details"
                    className="btn border-2 border-white bg-transparent text-white hover:text-primary-600 hover:bg-white"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${slideImage3}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay text-white py-24 bg-gradient-to-r from-primary-600/60 to-primary-600/40">
              <div className="container space-y-5">
                <h1 className="text-2xl font-bold">
                  Premium Quality <br /> Guaranteed
                </h1>
                <p>Fresh From farm to your table</p>
                <div className="buttons space-x-2">
                  <Link
                    to="/shop"
                    className="btn bg-white hover:bg-gray-200 border-2 border-white text-primary-600"
                  >
                    shop now
                  </Link>
                  <Link
                    to="/details"
                    className="btn border-2 border-white bg-transparent text-white hover:text-primary-600 hover:bg-white"
                  >
                    view details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
