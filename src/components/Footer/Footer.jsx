import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import freshCartLogo from "./../../assets/images/freshCart-logo.svg";
import freshMiniCartLogo from "./../../assets/images/mini-logo.png";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className=" py-5">
        <div className="container grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-3 pb-3">
          <div className="col-span-4 sm:col-span-2 md:col-span-6  lg:col-span-2 space-y-4 text-gray-600">
            <img src={freshCartLogo} alt="" />
            <p className="text-15">
              FreshCart is your one-stop destination for fresh groceries, organic produce, and
              household essentials delivered right yo your doorstep
            </p>
            <ul className="flex gap-4 *:text-gray-500 *:hover:text-gray-600 *:transition-all *:duration-200">
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faPinterestP} />
                </a>
              </li>
            </ul>
          </div>

          <div className="capitalize space-y-2 col-span-4 sm:col-span-2 md:col-span-2  lg:col-span-1">
            <h3 className="font-bold text-lg">categories</h3>
            <ul className="text-gray-600 text-15 *:py-1 *:px-2 *:rounded-md *:transition-all *:duration-200 *:hover:bg-primary-100 *:hover:text-primary-500">
              <li>
                <Link to="">fruits & vegetables</Link>
              </li>
              <li>
                <Link to="">dairy & eggs</Link>
              </li>
              <li>
                <Link to="">bakery & snacks</Link>
              </li>
              <li>
                <Link to="">meat & seafood</Link>
              </li>
              <li>
                <Link to="">beverages</Link>
              </li>
            </ul>
          </div>

          <div className="capitalize space-y-2 col-span-4 sm:col-span-2 md:col-span-2  lg:col-span-1">
            <h3 className="font-bold text-lg">quick links</h3>
            <ul className="text-gray-600 text-15 *:py-1 *:px-2 *:rounded-md *:transition-all *:duration-200 *:hover:bg-primary-100 *:hover:text-primary-500">
              <li>
                <Link to="">about us</Link>
              </li>
              <li>
                <Link to="">contact us</Link>
              </li>
              <li>
                <Link to="">privacy policy</Link>
              </li>
              <li>
                <Link to="">terms of services</Link>
              </li>
              <li>
                <Link to="">shipping policy</Link>
              </li>
            </ul>
          </div>

          <div className="capitalize space-y-2 col-span-4 sm:col-span-2 md:col-span-2  lg:col-span-1">
            <h3 className="font-bold text-lg">customer service</h3>
            <ul className="text-gray-600 text-15 *:py-1 *:px-2 *:rounded-md *:transition-all *:duration-200 *:hover:bg-primary-100 *:hover:text-primary-500">
              <li>
                <Link to="">my account</Link>
              </li>
              <li>
                <Link to="">order history</Link>
              </li>
              <li>
                <Link to="">wishlist</Link>
              </li>
              <li>
                <Link to="">returns & refunds</Link>
              </li>
              <li>
                <Link to="">help center</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-700 container flex justify-between items-center pt-3 border-t border-gray-300 text-15">
          <p>&copy; {new Date().getFullYear()} FreshCart. All right reserved.</p>
          <img className="w-6" src={freshMiniCartLogo} alt="" />
        </div>
      </footer>
    </>
  );
}
