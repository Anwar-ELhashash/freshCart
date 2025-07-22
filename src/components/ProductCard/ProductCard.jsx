import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDiscount } from "../../utils/average";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { WishlistContext } from "../../context/Wishlist.context";
import { useSelector } from "react-redux";

export default function ProductCard({ productInfo }) {
  const {
    id,
    imageCover,
    category,
    title,
    ratingsAverage,
    ratingsQuantity,
    price,
    priceAfterDiscount,
  } = productInfo;

  const { handelAddProductToCart } = useContext(CartContext);
  const { handelAddProductToWishList } = useContext(WishlistContext);

  // Using Redux With Token
  const { token } = useSelector((store) => {
    return store.tokenReducer;
  });

  return (
    <>
      <div className="transition-all duration-200 bg-white shadow-md hover:shadow-xl border border-gray-200 rounded-lg overflow-hidden">
        {/* image-cover */}
        <div className="relative">
          <img src={imageCover} alt="" className="h-52 mx-auto object-contain" />

          {priceAfterDiscount ? (
            <span className="absolute bg-red-500 rounded-md px-2 pt-1.5 pb-1 text-white text-12 top-3 left-3">
              -{calcDiscount(price, priceAfterDiscount)}%
            </span>
          ) : (
            ""
          )}

          <div className="absolute top-3 right-3 flex flex-col gap-2 *:transition-all *:duration-200 *:bg-white/50 *:hover:bg-white *:size-7 *:rounded-full *:text-sm *:flex *:items-center *:justify-center *:text-gray-500 *:hover:text-primary-400 *:border *:border-white *:hover:border-primary-400">
            <button
              onClick={() => {
                handelAddProductToWishList({ id });
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button>
              <FontAwesomeIcon icon={faRotate} />
            </button>
            <button>
              <Link to={`/productDetails/${id}`}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="content p-3 space-y-1.5">
          <span className="text-gray-400 text-sm">{category.name}</span>
          <Link to={`/productDetails/${id}`} className="font-semibold line-clamp-1 cursor-pointer">
            {title}
          </Link>
          {/* rating */}
          <div className="flex items-center gap-3">
            <Rating rating={ratingsAverage} />
            <p className="text-gray-400 text-13">
              {ratingsAverage} ({ratingsQuantity})
            </p>
          </div>
          {/* price */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-lg text-primary-500 text-nowrap">
                {priceAfterDiscount ? priceAfterDiscount : price} EGP
              </span>{" "}
              {priceAfterDiscount ? (
                <del className="text-gray-400 text-13 font-normal text-nowrap">{price} EGP</del>
              ) : (
                ""
              )}
            </div>
            {token ? (
              <button
                className="icon transition-all duration-200 bg-primary-600 hover:bg-primary-700 size-8 rounded-full text-white"
                onClick={() => {
                  handelAddProductToCart({ id });
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
