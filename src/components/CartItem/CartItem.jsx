import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import Rating from "../Rating/Rating";
import { CartContext } from "../../context/Cart.context";

export default function CartItem({ productInfo }) {
  console.log(productInfo);
  const { count, price, product, priceAfterDiscount } = productInfo;
  const { imageCover, ratingsAverage, title, category, id } = product;
  // here
  const { handelRemoveItemFromCart, handelQuantityOfProduct } = useContext(CartContext);

  const [isUpdate, setIsUpdate] = useState(false);

  async function handelUpdate({ id, count }) {
    setIsUpdate(true);
    await handelQuantityOfProduct({ id, count });
    setIsUpdate(false);
  }

  return (
    <>
      <section
        className={`flex justify-between flex-col items-start gap-4 md:flex-row md:gap-16 md:items-center border-b border-b-gray-100 pb-4 ${
          isUpdate && "opacity-70"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-md overflow-hidden">
            <img src={imageCover} alt="" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-0.5 flex-1">
            <h5 className="text-15 text-black/70 font-[600] line-clamp-1">{title}</h5>
            <p className="text-gray-500 text-13">{category.name}</p>
            <div className="flex items-center gap-2">
              <Rating rating={ratingsAverage} />
              <span className="text-gray-500 text-13">{ratingsAverage}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-6 border border-gray-200 rounded-md bg-white px-2 py-1 ">
            <li className="cursor-pointer">
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => {
                  handelUpdate({ id: id, count: count - 1 });
                }}
              />
            </li>

            <li className="w-5 text-center">{count}</li>

            <li className="cursor-pointer">
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => {
                  handelUpdate({ id: id, count: count + 1 });
                }}
              />
            </li>
          </ul>
          <p className="font-semibold w-22 text-center">
            {priceAfterDiscount ? priceAfterDiscount : price} EGP
          </p>
          <button
            className="transition-all duration-200 text-red-600 hover:text-red-500"
            onClick={() => {
              handelRemoveItemFromCart({ id });
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </section>
    </>
  );
}
