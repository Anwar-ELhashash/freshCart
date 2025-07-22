import {
  faCartShopping,
  faMinus,
  faPlus,
  faRotateLeft,
  faShareNodes,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Rating from "../../Rating/Rating";
import { calcDiscount } from "../../../utils/average";
import ReactImageGallery from "react-image-gallery";
import { useContext } from "react";
import { CartContext } from "../../../context/Cart.context";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from "react-redux";

export default function ProductInfo({ productDetails }) {
  const {
    id,
    title,
    images,
    ratingsAverage,
    ratingsQuantity,
    priceAfterDiscount,
    price,
    description,
    quantity,
  } = productDetails;

  // Using Redux With Token
  const { handelAddProductToCart } = useContext(CartContext);
  const { token } = useSelector((store) => {
    return store.tokenReducer;
  });

  return (
    <>
      <section className="container py-8 ">
        <div className="grid grid-cols-12 gap-5">
          {/* Images */}
          <div className="col-span-12 md:col-span-4 overflow-hidden rounded-lg">
            <ReactImageGallery
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
              items={
                Array.isArray(images) &&
                images.map((image) => {
                  return {
                    original: image,
                    thumbnail: image,
                  };
                })
              }
            />
          </div>

          {/* Product Details */}
          <div className="col-span-12 md:col-span-8 p-4 rounded-lg bg-white">
            {/* Top */}
            <div className="space-y-3">
              <div className="flex justify-between items-center ">
                <span
                  className={`${
                    quantity > 0
                      ? "bg-primary-200/90 text-primary-700"
                      : "bg-red-200/90 text-red-700"
                  } rounded-md px-2 py-1 text-13 capitalize`}
                >
                  {quantity > 0 ? "in stock" : "out of stock"}
                </span>
                <ul className="flex gap-2 text-gray-500">
                  <li>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHeart} />
                  </li>
                </ul>
              </div>
              <h2 className="text-xl font-bold capitalize">{title}</h2>
              {/* Rating */}
              <div className="flex gap-2 items-center">
                <Rating rating={ratingsAverage} />
                <p className="text-13 text-gray-500">
                  {ratingsAverage} ({ratingsQuantity} reviews)
                </p>
              </div>
              {/* Price */}
              <div className="flex gap-3 items-center">
                <span className="text-xl font-bold">
                  {priceAfterDiscount ? priceAfterDiscount : price} EGP
                </span>
                {priceAfterDiscount ? <del className="text-13 text-gray-500">{price} EGP</del> : ""}
                {priceAfterDiscount ? (
                  <span className="text-12 bg-red-100 text-red-600 px-2 py-1 rounded-md capitalize">
                    save {calcDiscount(price, priceAfterDiscount)}%
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <hr className="text-gray-300 my-5" />
            {/* Middle */}
            <div className="space-y-5">
              <p className="text-15 text-gray-500">{description}</p>
              {/* Quantity */}
              {token ? (
                <>
                  <div className=" flex items-center gap-4">
                    <p className="text-gray-600">Quantity:</p>

                    <ul className="flex items-center gap-6 border border-gray-200 rounded-md bg-white px-2 py-1 ">
                      <li className="cursor-pointer">
                        <FontAwesomeIcon icon={faMinus} />
                      </li>

                      <li>1</li>

                      <li className="cursor-pointer">
                        <FontAwesomeIcon icon={faPlus} />
                      </li>
                    </ul>
                    <p className="text-gray-400 text-sm">Only {quantity} items left in stock</p>
                  </div>
                  <div className="flex gap-3 *:flex-1 *:py-2">
                    <button
                      className={`btn bg-primary-600 hover:bg-primary-700`}
                      onClick={() => {
                        handelAddProductToCart({ id });
                      }}
                    >
                      <FontAwesomeIcon icon={faCartShopping} className="mr-1.5" />
                      Add to Cart
                    </button>
                    <button className="btn bg-white text-black border border-gray-300 hover:bg-gray-100">
                      Buy Now
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <hr className="text-gray-300 my-5" />
            {/* Bottom */}
            <div>
              <div className="flex justify-between items-center gap-10">
                <div className="flex flex-col lg:flex-row items-center gap-3">
                  <div className="icon">
                    <FontAwesomeIcon icon={faTruckFast} />
                  </div>
                  <div className="text-center lg:text-start">
                    <h4 className="font-semibold capitalize">faster checkout</h4>
                    <p className="text-gray-600 text-13">Free shipping in order over $50</p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-3">
                  <div className="icon">
                    <FontAwesomeIcon icon={faRotateLeft} />
                  </div>
                  <div className="text-center lg:text-start">
                    <h4 className="font-semibold capitalize">30 days return</h4>
                    <p className="text-gray-600 text-13">satisfaction guaranteed or money back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
