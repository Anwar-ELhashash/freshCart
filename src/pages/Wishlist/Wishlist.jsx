import { faHeart, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import { useContext } from "react";
import { WishlistContext } from "../../context/Wishlist.context";
import { Link } from "react-router";
import WishlistSkeleton from "../../components/Skeleton/WishlistSkeleton";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function Wishlist() {
  const { wishlist, isLoading, clearWishlist } = useContext(WishlistContext);
  useScrollTop();
  if (isLoading || !wishlist) {
    return <WishlistSkeleton />;
  }

  const { count, data } = wishlist;

  return (
    <>
      <PageMetaData title="Wishlist" />
      <section className="bg-gray-100 py-15 px-5">
        <div className="container rounded-lg bg-white p-5">
          <h2 className="text-2xl font-bold pb-2">My Wishlist</h2>
          {count > 0 && wishlist !== null ? (
            <>
              {/* Top */}
              <div className="pb-3 border-b border-b-gray-200">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">{count} items in your wishlist</p>
                  <div className="space-x-2">
                    <button
                      className="btn bg-white duration-400 text-gray-800 hover:bg-red-500 hover:text-white"
                      onClick={() => {
                        clearWishlist();
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} /> Clear All
                    </button>
                    <button className="btn bg-primary-600 hover:bg-primary-700">
                      <FontAwesomeIcon className="mr-2" icon={faCartShopping} />
                      Add All to Cart
                    </button>
                  </div>
                </div>
              </div>
              {/* wishlist items */}
              <div>
                {Array.isArray(data) &&
                  data.map((item) => {
                    return <WishlistItem key={item.id} productInfo={item} />;
                  })}
              </div>
            </>
          ) : (
            <>
              <div className="border-t border-t-gray-200 pt-5 text-gray-600 text-center space-y-2">
                <p>
                  <span>Your wishlist is empty</span>
                  <FontAwesomeIcon icon={faHeart} className="text-primary-600 ms-2" />
                </p>
                <p className="">
                  You can show products from{" "}
                  <Link
                    to="/home"
                    className="text-primary-600 transition-all duration-200 hover:underline"
                  >
                    here
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
