import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBrands } from "../../services/brands-service";
import { useEffect, useState } from "react";
import BrandsSkeleton from "../../components/Skeleton/BrandsSkeleton";
import PageMetaData from "../../components/PageMetaData.jsx/PageMetaData";
import useScrollTop from "../../hooks/useScroll";

export default function Brands() {
  const [brands, setBrands] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function handelGetBrands() {
    try {
      setIsLoading(true);
      const response = await getBrands();
      if (response.success) {
        setBrands(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handelGetBrands();
  }, []);

  useScrollTop();

  return (
    <>
      <PageMetaData title="Brands" />
      <section>
        {/* Top */}
        <div className="container text-center space-y-3 py-10">
          <h1 className="font-bold text-3xl">Our Partner Brands</h1>
          <p className="text-gray-600 w-2/3 mx-auto">
            Discover quality products from our trusted brands partners. We've partnered with leading
            brands to bring you the best selection to fresh and organic products
          </p>
        </div>
        {/* middle */}
        <div className="bg-gray-100">
          <div className="container">
            {/* search input */}
            <div className="py-10 ">
              <div className="flex justify-between items-center">
                <div className="relative w-72">
                  <input
                    className="input w-full ps-10 bg-white"
                    type="search"
                    placeholder="search brands..."
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-gray-600">Sort By: </p>
                  <select className="outline-none border border-gray-200 p-1 rounded-md bg-white">
                    <option value="one">Alphabetical: A-Z</option>
                    <option value="two">Alphabetical: Z-A</option>
                  </select>
                </div>
              </div>
            </div>

            {/* brands */}
            {isLoading ? (
              <BrandsSkeleton />
            ) : (
              <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-10">
                {Array.isArray(brands) &&
                  brands.map((brand) => {
                    return (
                      <div
                        key={brand._id}
                        className="bg-white rounded-md overflow-hidden border border-gray-200"
                      >
                        <img src={brand.image} alt="" className="w-full" />
                        <div className="border-t border-t-gray-200">
                          <h3 className="font-semibold p-2 text-gray-600">{brand.name}</h3>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
