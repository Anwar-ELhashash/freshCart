import {
  faChevronLeft,
  faChevronRight,
  faCreditCard,
  faInfo,
  faLock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";
import mastercard from "./../../assets/images/mastercard.webp";
import paypal from "./../../assets/images/paypal.png";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { OrderContext } from "../../context/Order.context";
import { CartContext } from "../../context/Cart.context";
import toast from "react-hot-toast";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function Checkout() {
  const { handelCreateCashOrder, handelCreateOnlineOrder, isLoading } = useContext(OrderContext);
  const { clearAllItems } = useContext(CartContext);
  const { cartInfo } = useContext(CartContext);
  const [payment, setPayment] = useState(null);
  const navigate = useNavigate();
  useScrollTop();
  function makeOrder(values) {
    const shippingAddress = { shippingAddress: values };
    if (payment === null) {
      toast.error("Choose Payment Type");
    } else if (payment === "cash") {
      handelCreateCashOrder({ id: cartInfo.cartId, shippingAddress });
      if (!isLoading) {
        clearAllItems();
        setTimeout(() => {
          navigate("/allorders");
        }, 2500);
      }
    } else if (payment === "online") {
      handelCreateOnlineOrder({ id: cartInfo.cartId, shippingAddress });
      if (!isLoading) {
        clearAllItems();
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      city: "",
      phone: "",
      details: "",
    },
    onSubmit: makeOrder,
  });

  return (
    <>
      <PageMetaData title="Checkout" />
      <section className="py-15 bg-gray-100 border-t border-t-gray-200">
        <div className="container">
          <div className="space-y-10  md:w-2/3 mx-auto">
            <h1 className="text-3xl font-semibold text-black/80 mb-8">Checkout</h1>
            {/* Billing Address */}
            <div className="bg-white rounded-lg p-4 py-5 h-fit border border-gray-200 shadow-md">
              <h2 className="text-xl font-bold mb-4">Billing Address</h2>
              <form id="myForm" className="space-y-3" onSubmit={formik.handleSubmit}>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="sameAddress" className="size-4" />
                  <label className="text-gray-600 text-15" htmlFor="sameAddress">
                    Same as delivery address
                  </label>
                </div>

                <div>
                  <label htmlFor="city" className="text-gray-700 mb-2 block">
                    City
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="city"
                    id="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-gray-700 mb-2 block">
                    Phone
                  </label>
                  <input
                    className="input"
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div>
                  <label htmlFor="details" className="text-gray-700 mb-2 block">
                    Details
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="details"
                    id="details"
                    value={formik.values.details}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-white  rounded-lg p-4 py-5 border border-gray-200 shadow-md">
              <h2 className="text-xl font-bold mb-7">Payment Method</h2>
              <div className="space-y-4">
                {/* Cash Payment */}
                <div className="border border-gray-200 rounded-md p-4 py-6">
                  <label
                    htmlFor="cash"
                    className="flex items-start gap-2"
                    onClick={() => {
                      setPayment("cash");
                    }}
                  >
                    <input type="radio" name="payment" id="cash" className="size-5" />

                    <div className="flex-1">
                      <div className="flex gap-2">
                        <FontAwesomeIcon
                          icon={faMoneyBillWave}
                          className="text-primary-600 text-xl mt-1"
                        />

                        <div className="flex-1 space-y-3">
                          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center">
                            <div>
                              <h4 className="font-semibold">Cash on Delivery</h4>
                              <p className="text-gray-600">Pay when your order arrive</p>
                            </div>

                            <p className="text-primary-600 font-semibold text-15">
                              No extra charges
                            </p>
                          </div>

                          <div className="bg-primary-200/50 p-3 border border-primary-200 rounded-md text-center sm:text-start flex flex-col items-center sm:flex-row gap-2">
                            <span className="size-6 bg-primary-600 text-white flex items-center justify-center rounded-full p-2">
                              <FontAwesomeIcon icon={faInfo} />
                            </span>
                            <span className="text-primary-700">
                              Please keep exact change ready for hassle-free delivery
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Online Payment */}
                <div className="border border-gray-200 rounded-md p-4 py-6">
                  <label
                    htmlFor="online"
                    className="flex items-start gap-2"
                    onClick={() => {
                      setPayment("online");
                    }}
                  >
                    <input type="radio" name="payment" id="online" className="size-5" />

                    <div className="flex-1">
                      <div className="flex gap-2">
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          className="text-primary-600 text-xl mt-1"
                        />

                        <div className="flex-1 space-y-3">
                          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center">
                            <div>
                              <h4 className="font-semibold">Online Payment</h4>
                              <p className="text-gray-600">
                                Pay securely with card or digital wallet
                              </p>
                            </div>

                            <p className="text-primary-600 font-semibold text-15">Recommended</p>
                          </div>

                          <div className="bg-primary-200/50 p-3 border border-primary-200 rounded-md text-center sm:text-start flex flex-col items-center sm:flex-row gap-2">
                            <span className="size-6 bg-blue-600 text-white flex items-center justify-center rounded-full p-2">
                              <FontAwesomeIcon icon={faInfo} />
                            </span>
                            <span className="text-blue-700">
                              You will be redirected to secure payment gateway to complete your
                              transaction
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className=" bg-white rounded-lg p-4 border border-gray-200 shadow-md">
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="btn bg-primary-600 hover:bg-primary-700"
                  form="myForm"
                >
                  Proceed to Payment
                  <FontAwesomeIcon className="ml-2" icon={faChevronRight} />
                </button>
                <Link
                  to="/cart"
                  className="btn text-center bg-white border border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700"
                >
                  <FontAwesomeIcon className="mr-2" icon={faChevronLeft} />
                  Return to cart
                </Link>
              </div>
              <div className="py-3 space-y-4">
                <h3 className="font-semibold">Secure Checkout</h3>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faLock} className="text-primary-600" />
                  <p className="text-gray-600">Your payment information is secure</p>
                </div>
                <div className="flex gap-2 *:w-15">
                  <img src={mastercard} alt="" />
                  <img src={paypal} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
