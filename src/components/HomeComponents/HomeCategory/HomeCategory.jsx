import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import useCategories from "./../../../hooks/useCategories.js";
import HomeCategorySkeleton from "../../Skeleton/HomeCategorySkeleton.jsx";
export default function HomeCategory() {
  const { categories, isLoading, isError, error } = useCategories();

  if (isLoading || !categories) {
    return <HomeCategorySkeleton />;
  }
  if (isError) {
    console.log(error);
  }

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Shop by Category:</h2>
            <Link
              to="/allCategories"
              className="text-primary-500 text-15 flex items-center transition-all duration-200 gap-2 hover:underline"
            >
              <span>view all categories</span> <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-8">
            {Array.isArray(categories) &&
              categories.map((category) => (
                <Link
                  key={category._id}
                  className="card bg-white rounded-xl transition-all duration-300 shadow hover:shadow-md flex flex-col items-center py-4 gap-2 cursor-pointer"
                  to={`/categories/${category._id}`}
                >
                  <img
                    src={category.image}
                    alt="image-category"
                    className="size-16 rounded-full object-contain "
                  />
                  <p>{category.name}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
