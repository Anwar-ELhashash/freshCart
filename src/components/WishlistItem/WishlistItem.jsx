import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Rating from "../Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { WishlistContext } from "../../context/Wishlist.context";

export default function WishlistItem({ productInfo }) {
  const { id, title, imageCover, ratingsAverage, price, quantity, category, priceAfterDiscount } =
    productInfo;
  const { handelAddProductToCart } = useContext(CartContext);
  const { handelRemoveItemFromWishlist } = useContext(WishlistContext);
  return (
    <>
      <div className="py-3 border-b border-b-gray-200 flex items-center justify-between gap-20">
        {/* right */}
        <div className="flex items-center gap-2 flex-1">
          {/* image */}
          <div className="w-24 h-24 rounded-md overflow-hidden">
            <img src={imageCover} alt="" className="w-full h-full object-contain" />
          </div>

          {/* rating */}
          <div className="flex-1 space-y-1.5">
            <span className="text-gray-500 text-15">{category.name}</span>
            <h4 className="text-xl font-semibold line-clamp-1">{title}</h4>
            <div className="flex gap-2">
              <Rating rating={ratingsAverage} />
              <span className="text-gray-500">
                {ratingsAverage} ({quantity})
              </span>
            </div>
            <span className="text-xl font-bold text-primary-600">
              {priceAfterDiscount ? priceAfterDiscount : price} EGP
            </span>
          </div>
        </div>
        {/* left */}
        <div className="space-x-3">
          <button
            className="btn bg-primary-600 hover:bg-primary-700"
            onClick={() => {
              handelAddProductToCart({ id });
              setTimeout(() => {
                handelRemoveItemFromWishlist({ id });
              }, 3000);
            }}
          >
            Add to Cart
          </button>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="text-gray-600 text-xl transition-all duration-200 cursor-pointer hover:text-red-500"
            onClick={() => {
              handelRemoveItemFromWishlist({ id });
            }}
          />
        </div>
      </div>
    </>
  );
}
