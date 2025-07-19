import Rating from "../../Rating/Rating";

export default function ReviewsTab({ productDetails }) {
  const { ratingsQuantity, ratingsAverage } = productDetails;
  return (
    <>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Customer Reviews</h3>
          <button className="btn bg-primary-600 hover:bg-primary-700">Write Review</button>
        </div>

        <div className="space-y-2">
          <div className="flex gap-4 items-center">
            <Rating rating={ratingsAverage} />
            <span className="text-gray-700">{ratingsAverage} Out of 5</span>
          </div>
          <p className="text-gray-600">Based on {ratingsQuantity} Reviews</p>
        </div>

        <div className="space-y-2 flex justify-between items-center border-b border-gray-200 pb-2">
          <div className="space-y-2">
            <div className="flex gap-4 items-center">
              <Rating rating={ratingsAverage} />
              <span className="text-gray-700">Ali Mohamed</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eaque!
            </p>
          </div>
          <p className="text-gray-600 text-sm">2 Days Ago</p>
        </div>

        <div className="space-y-2 flex justify-between items-center border-b border-gray-200 pb-2">
          <div className="space-y-2">
            <div className="flex gap-4 items-center">
              <Rating rating={ratingsAverage} />
              <span className="text-gray-700">Ahmed Sayed</span>
            </div>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <p className="text-gray-600 text-sm">3 Weeks Ago</p>
        </div>
      </div>
    </>
  );
}
