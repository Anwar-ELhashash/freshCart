import { Link } from "react-router";
import image from "./../../assets/images/error.svg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function NotFound() {
  useScrollTop();
  return (
    <>
      <PageMetaData title="Not Found" />
      <section className="py-15">
        <div className="container text-center space-y-3">
          <img src={image} alt="" className="mx-auto" />
          <h2 className="text-3xl font-bold">Oops! Page Not Found</h2>
          <p className="text-gray-700">The page you are looking for notfound</p>
          <Link to="/home">
            <button className="btn bg-primary-600 hover:bg-primary-700">
              <FontAwesomeIcon icon={faHouse} className="mr-2" />
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
