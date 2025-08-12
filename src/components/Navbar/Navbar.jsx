import {
  faBars,
  faBolt,
  faCartShopping,
  faChevronDown,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faSpinner,
  faUserPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faHeart, faIdCard, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import freshCartLogo from "./../../assets/images/freshCart-logo.svg";
import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Cart.context";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../app/token.slice";

export default function Navbar() {
  // Using Redux With Token
  const { logOut } = actions;
  const { token } = useSelector((store) => {
    return store.tokenReducer;
  });
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartInfo, isLoading } = useContext(CartContext);
  const status = useOnlineStatus();

  return (
    <>
      <header>
        <div className="bg-white">
          <div className="container">
            {/* top nav */}
            <div className="hidden md:flex justify-between items-center border-b border-gray-300 py-1 text-gray-700 text-13">
              {/* left side */}
              <ul className="flex items-center gap-3">
                <li>
                  <a href="tel:+1 (800) 123-4567">
                    <FontAwesomeIcon className="mr-2 text-sm" icon={faPhone} />
                    +1 (800) 123-4567
                  </a>
                </li>
                <li>
                  <a href="mailto:support@freshcart.com">
                    <FontAwesomeIcon className="mr-2 text-sm" icon={faEnvelope} />
                    support@freshcart.com
                  </a>
                </li>
                <li className={status ? "text-primary-400" : "text-red-600"}>
                  {status ? (
                    <>
                      <FontAwesomeIcon icon={faWifi} /> online
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faWifi} /> offline
                    </>
                  )}
                </li>
              </ul>

              {/* right side */}
              <ul className="flex items-center gap-2 capitalize">
                <li>
                  <Link to="/order">task order</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
                <li className="uppercase">
                  <select className="outline-none">
                    <option value="usd">USD</option>
                    <option value="egp">EFP</option>
                    <option value="sar">SAR</option>
                    <option value="aed">AED</option>
                  </select>
                </li>
                <li>
                  <select className="outline-none">
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </li>
              </ul>
            </div>

            {/* middle navbar */}
            <nav className="py-3 flex justify-between items-center">
              {/* image logo */}
              <Link to="">
                <img src={freshCartLogo} className="w-full" alt="fresh card logo" />
              </Link>

              {/* search input */}
              <div className="hidden md:block relative w-1/4 lg:w-1/3">
                <input
                  type="search"
                  name="search"
                  placeholder="search for product..."
                  className="input pr-5.5"
                />
                <FontAwesomeIcon
                  className="absolute top-1/2 right-0.5 text-sm text-gray-600 -translate-1/2 cursor-pointer"
                  icon={faMagnifyingGlass}
                />
              </div>

              {/* list of pages */}
              <ul className="hidden md:flex gap-3 items-center text-center text-gray-700 capitalize">
                <li>
                  <NavLink
                    to="/wishlist"
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-500" : ""
                        } transition-all duration-200 text-lg hover:text-primary-500`;
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                    <p className="mt-1 text-13">wishlist</p>
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/cart"
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-500" : ""
                        } transition-all duration-200 text-lg hover:text-primary-500`;
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p className="mt-1 text-13">cart</p>
                    {token ? (
                      <p className="absolute -top-1.5 -right-1.5 size-5 flex justify-center items-center text-white rounded-full bg-primary-500 text-sm p-1">
                        {isLoading && !cartInfo ? (
                          <FontAwesomeIcon icon={faSpinner} spin />
                        ) : (
                          cartInfo.numOfCartItems
                        )}
                      </p>
                    ) : (
                      ""
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/account"
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-500" : ""
                        } transition-all duration-200 text-lg hover:text-primary-500`;
                    }}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <p className="mt-1 text-13">account</p>
                  </NavLink>
                </li>

                {!token ? (
                  <>
                    <li>
                      <NavLink
                        to="/signup"
                        className={({ isActive }) => {
                          return `${isActive ? "text-primary-500" : ""
                            } transition-all duration-200 text-lg hover:text-primary-500`;
                        }}
                      >
                        <FontAwesomeIcon icon={faUserPlus} />
                        <p className="mt-1 text-13">signup</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className={({ isActive }) => {
                          return `${isActive ? "text-primary-500" : ""
                            } transition-all duration-200 text-lg hover:text-primary-500`;
                        }}
                      >
                        <FontAwesomeIcon icon={faIdCard} />
                        <p className="mt-1 text-13">login</p>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      className="transition-all duration-200 hover:text-primary-500 cursor-pointer"
                      onClick={() => {
                        dispatch(logOut());
                      }}
                    >
                      <FontAwesomeIcon className="text-lg" icon={faRightFromBracket} />
                      <p className="mt-1 text-13">logout</p>
                    </li>
                  </>
                )}
              </ul>

              {/* toggle icon */}
              <div className="md:hidden">
                <FontAwesomeIcon
                  className="bg-primary-600 text-white py-1.5 px-2 rounded-md size-3"
                  icon={isMenuOpen ? faXmark : faBars}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                />
              </div>

              {/* mobile medea */}
              {/* background */}
              <div
                className={`${isMenuOpen ? "block" : "hidden"
                  } background fixed inset-0 bg-black/40 z-40`}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              ></div>

              {/* offCanvas */}
              <div
                className={`${isMenuOpen ? "-left-0" : "-left-full"
                  } offCanvas md:hidden fixed top-0 bottom-0 p-3 space-y-5 bg-white z-50 border-r border-gray-200 transition-all duration-300`}
              >
                {/* logo section */}
                <div className="flex justify-between">
                  {/* image logo */}
                  <div>
                    <img src={freshCartLogo} alt="" />
                  </div>

                  {/* exit icon */}
                  <FontAwesomeIcon
                    className="px-1.5 py-1 cursor-pointer bg-gray-200 text-sm rounded-md transition-colors duration-200 hover:bg-red-500 hover:text-white"
                    icon={faXmark}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  />
                </div>

                {/* search input */}
                <div className="relative">
                  <input
                    type="search"
                    name="search"
                    placeholder="search for product..."
                    className="input pr-5.5 w-full"
                  />
                  <FontAwesomeIcon
                    className="absolute top-1/2 right-0.5 text-sm text-gray-600 -translate-1/2 cursor-pointer"
                    icon={faMagnifyingGlass}
                  />
                </div>

                {/* list of pages */}
                <ul className="text-gray-700 capitalize">
                  <h2 className="my-2 text-black font-semibold">main menu</h2>
                  <ul className="space-y-1">
                    <li>
                      <NavLink
                        to="/wishlist"
                        className={({ isActive }) => {
                          return `${isActive ? "text-primary-500 bg-primary-100/60" : ""
                            } flex gap-2 text-lg items-center py-2 px-1.5 rounded-md transition-all duration-200 hover:bg-primary-100/60 hover:text-primary-500`;
                        }}
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                      >
                        <FontAwesomeIcon className="size-6" icon={faHeart} />
                        <p className="text-sm">wishlist</p>
                      </NavLink>
                    </li>
                    <li className="relative">
                      <NavLink
                        to="/cart"
                        className={({ isActive }) => {
                          return `${isActive ? "text-primary-500 bg-primary-100/60" : ""
                            } flex gap-2 text-lg items-center py-2 px-1.5 rounded-md transition-all duration-200 hover:bg-primary-100/60 hover:text-primary-500`;
                        }}
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                      >
                        <FontAwesomeIcon className="size-6" icon={faCartShopping} />
                        {token ? (
                          <span className="absolute top-1 left-4 size-1 flex justify-center items-center p-2 text-white rounded-full bg-primary-500 text-sm">
                            {isLoading ? (
                              <FontAwesomeIcon icon={faSpinner} spin />
                            ) : (
                              cartInfo.numOfCartItems
                            )}
                          </span>
                        ) : (
                          ""
                        )}
                        <p className="text-sm">cart</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/account"
                        className={({ isActive }) => {
                          return `${isActive ? "text-primary-500 bg-primary-100/60" : ""
                            } flex gap-2 text-lg items-center py-2 px-1.5 rounded-md transition-all duration-200 hover:bg-primary-100/60 hover:text-primary-500`;
                        }}
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                      >
                        <FontAwesomeIcon className="size-6" icon={faUser} />
                        <p className="text-sm">account</p>
                      </NavLink>
                    </li>
                  </ul>

                  <h2 className="my-2 text-black font-semibold">account</h2>
                  <ul className="space-y-1">
                    {!token ? (
                      <>
                        <li>
                          <NavLink
                            to="/signup"
                            className={({ isActive }) => {
                              return `${isActive ? "text-primary-500 bg-primary-100/60" : ""
                                } flex gap-2 text-lg items-center py-2 px-1.5 rounded-md transition-all duration-200 hover:bg-primary-100/60 hover:text-primary-500`;
                            }}
                            onClick={() => {
                              setIsMenuOpen(false);
                            }}
                          >
                            <FontAwesomeIcon className="size-6" icon={faUserPlus} />
                            <p className="text-sm">signup</p>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/login"
                            className={({ isActive }) => {
                              return `${isActive ? "text-primary-500 bg-primary-100/60" : ""
                                } flex gap-2 text-lg items-center py-2 px-1.5 rounded-md transition-all duration-200 hover:bg-primary-100/60 hover:text-primary-500`;
                            }}
                            onClick={() => {
                              setIsMenuOpen(false);
                            }}
                          >
                            <FontAwesomeIcon className="size-6" icon={faIdCard} />
                            <p className="text-sm">login</p>
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <>
                        <li
                          className="flex gap-2 items-center py-2 px-1.5 rounded-md transition-all duration-200 hover:bg-primary-100/60 hover:text-primary-500 cursor-pointer "
                          onClick={() => {
                            dispatch(logOut());
                          }}
                        >
                          <FontAwesomeIcon className="text-lg size-6" icon={faRightFromBracket} />
                          <p className="text-sm">logout</p>
                        </li>
                      </>
                    )}
                  </ul>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* last nav */}
        {token ? (
          <>
            <nav className=" hidden md:block transition-all duration-500 bg-gray-100 py-3">
              <div className="container flex items-center gap-5">
                {/* button */}
                <div className="relative group">
                  {/* toggle button */}
                  <button className="btn bg-primary-600 hover:bg-primary-700 space-x-2 text-nowrap text-15">
                    <FontAwesomeIcon icon={faBars} />
                    <span>all categories</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>

                  {/* hidden menu */}
                  <menu className="hidden z-10 absolute capitalize text-sm *:py-1.5 *:pl-2 *:pr-4 border *:hover:bg-gray-100 *:transition-all *:duration-200 *:text-gray-600 border-gray-200 rounded-md bg-white group-hover:block divide-y-2 divide-gray-200/30">
                    <li>
                      <Link className="text-nowrap flex items-center gap-2" to="/menCategory">
                        <FontAwesomeIcon className="text-primary-500 size-5" icon={faPerson} />
                        <span>men's fashion</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="text-nowrap flex items-center gap-2" to="/womenCategory">
                        <FontAwesomeIcon className="text-primary-500 size-5" icon={faPersonDress} />
                        <span>women's fashion</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-nowrap flex items-center gap-2"
                        to="/electronicsCategory"
                      >
                        <FontAwesomeIcon className="text-primary-500 size-5" icon={faBolt} />
                        <span>electronics</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="text-nowrap flex items-center gap-2" to="/allCategories">
                        <FontAwesomeIcon className="text-primary-500 size-5" icon={faEllipsis} />
                        <span>view all categories</span>
                      </Link>
                    </li>
                  </menu>
                </div>

                {/* list of categories */}
                <ul className="flex gap-1 capitalize text-gray-700 text-15">
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `${isActive ? "text-white bg-primary-600" : ""
                          } transition-all duration-200 rounded-md px-2 py-1 hover:text-white hover:bg-primary-600`;
                      }}
                      to="/home"
                    >
                      home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `${isActive ? "text-white bg-primary-600" : ""
                          } transition-all duration-200 rounded-md px-2 py-1 hover:text-white hover:bg-primary-600`;
                      }}
                      to="/allorders"
                    >
                      Order
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `${isActive ? "text-white bg-primary-600" : ""
                          } transition-all duration-200 rounded-md px-2 py-1 hover:text-white hover:bg-primary-600`;
                      }}
                      to="/featured"
                    >
                      featured products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `${isActive ? "text-white bg-primary-600" : ""
                          } transition-all duration-200 rounded-md px-2 py-1 hover:text-white hover:bg-primary-600`;
                      }}
                      to="/offers"
                    >
                      offers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => {
                        return `${isActive ? "text-white bg-primary-600" : ""
                          } transition-all duration-200 rounded-md px-2 py-1 hover:text-white hover:bg-primary-600`;
                      }}
                      to="/brands"
                    >
                      brands
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </>
        ) : (
          ""
        )}
      </header>
    </>
  );
}
