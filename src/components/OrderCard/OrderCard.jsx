export default function OrderCard({ order }) {
  const { id, totalOrderPrice, isPaid, isDelivered, cartItems, shippingAddress } = order;
  return (
    <>
      <div className="border border-gray-200 rounded-md">
        {/* one */}
        <div className="flex items-center gap-3 bg-gray-100 py-3 px-4">
          <h4 className="font-semibold text-15">Order #{id}</h4>
          <span
            className={`text-13 px-2 py-1 rounded-md ${
              isDelivered ? "text-primary-700 bg-primary-200" : "text-red-700 bg-red-200"
            } `}
          >
            {isDelivered ? "Delivered" : "Not Delivered"}
          </span>
          <span
            className={`text-13 px-2 py-1 rounded-md ${
              isPaid ? "text-blue-700 bg-blue-200" : "text-red-700 bg-red-200"
            } `}
          >
            {isPaid ? "Paid" : "Not Paid"}
          </span>
        </div>
        {/* two */}
        <div className="py-3 px-4 flex items-center *:flex-1 gap-4">
          {/* images */}
          <div className="flex items-center gap-1">
            {Array.isArray(cartItems) &&
              cartItems.map((item) => {
                return (
                  <div key={item._id} className="w-16 relative">
                    <img src={item.product.imageCover} alt="" className="w-full" />
                    <span className="absolute bg-primary-600 text-white flex justify-center items-center size-4 rounded-[3px] py-3 top-0 right-0">
                      {item.count}
                    </span>
                  </div>
                );
              })}
          </div>
          {/* items */}
          <div>
            <h5 className="text-gray-500 text-15 font-semibold">Items</h5>
            <p className="text-sm font-semibold">{cartItems.length} items</p>
          </div>
          {/* Total Amount */}
          <div>
            <h5 className="text-gray-500 text-15 font-semibold">Total Amount</h5>
            <p className="text-sm font-semibold">
              {Math.trunc(totalOrderPrice + 70 + totalOrderPrice * 0.14)} EGP
            </p>
          </div>
          {/* address */}
          <div>
            <h5 className="text-gray-500 text-15 font-semibold">Delivered To</h5>
            <p className="text-sm font-semibold">
              {shippingAddress ? shippingAddress.city : "Nothing"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
