import { faCartShopping, faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../../components/CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { Link } from "react-router";
import CartSkeleton from "../../components/Skeleton/CartSkeleton";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function Cart() {
  const { cartInfo, clearAllItems, isLoading } = useContext(CartContext);
  useScrollTop();
  if (isLoading) {
    return <CartSkeleton />;
  }

  let { numOfCartItems, data } = cartInfo;
  let { products, totalCartPrice } = data;

  return (
    <>
      <PageMetaData title="Cart" />
      <section className="bg-gray-100 py-10">
        <div className="container grid grid-cols-6 gap-5 *:border *:border-gray-200 *:rounded-md *:bg-white *:py-4 *:shadow ">
          {/* left */}
          <div className="col-span-6 lg:col-span-4 bg-red-500 h-fit">
            <div className="border-b border-b-gray-200 pb-4 px-4">
              <h2 className="text-xl font-semibold mb-1">Shopping Cart</h2>
              {products.length > 0 ? (
                <p className="text-gray-500">{numOfCartItems} items in your cart</p>
              ) : (
                ""
              )}
            </div>

            {/* body */}
            <div className="p-4 flex flex-col gap-4">
              {products.length > 0 ? (
                Array.isArray(products) &&
                products.map((product) => {
                  return <CartItem key={product._id} productInfo={product} />;
                })
              ) : (
                <>
                  <div className="text-center space-y-2 text-gray-600 py-5">
                    <p>
                      Your Cart Is Empty{" "}
                      <FontAwesomeIcon icon={faCartShopping} className="ms-1 text-primary-600" />
                    </p>
                    <p>
                      You can continue shopping from{" "}
                      <Link
                        className="transition-all duration-200 text-primary-400 hover:underline hover:text-primary-500"
                        to="/home"
                      >
                        here
                      </Link>
                    </p>
                  </div>
                </>
              )}

              {products.length > 0 ? (
                <button
                  className="btn bg-red-600 text-white hover:bg-red-700 w-fit ms-auto"
                  onClick={() => {
                    clearAllItems();
                  }}
                >
                  Clear Cart
                </button>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* right */}
          <div className="col-span-6 lg:col-span-2 bg-red-300 px-4 space-y-5 h-fit">
            <h2 className="font-semibold text-xl">Order Summary</h2>

            <ul className="space-y-2 text-15 *:flex *:justify-between *:items-center ">
              <li>
                <span>Subtotal (2 items)</span>
                <span>{totalCartPrice} EGP</span>
              </li>
              <li>
                <span>Shipping</span>
                <span>{products.length > 0 ? 70 : 0} EGP</span>
              </li>
              <li className="border-b pb-2 border-b-gray-200">
                <span>Tax</span>
                <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
              </li>
              <li className="font-semibold">
                <span>Total</span>
                <span>
                  {Math.trunc(
                    totalCartPrice + (products.length > 0 ? 70 : 0) + totalCartPrice * 0.14
                  )}{" "}
                  EGP
                </span>
              </li>
            </ul>

            {numOfCartItems > 0 ? (
              <div className="*:w-full">
                <Link
                  to="/checkout"
                  className="btn bg-primary-700 text-white hover:bg-primary-800 mb-2 text-center"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/home"
                  className="btn bg-white text-black border border-gray-200 hover:bg-gray-50 hover:text-primary-700 text-center"
                >
                  Continue Shipping
                </Link>
              </div>
            ) : (
              ""
            )}

            <div className="flex flex-col gap-2 *:bg-primary-100 *:rounded-md *:p-3">
              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  <FontAwesomeIcon className="text-primary-600" icon={faTruckFast} />
                  <span>Free Delivery</span>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  <FontAwesomeIcon className="text-primary-600" icon={faShieldHalved} />
                  <span>Free Delivery</span>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
