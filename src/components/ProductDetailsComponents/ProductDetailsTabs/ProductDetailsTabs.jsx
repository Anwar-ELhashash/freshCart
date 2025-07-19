import { useState } from "react";
import DetailsTab from "./DetailsTab";
import ReviewsTab from "./ReviewsTab";
import ShippingTab from "./ShippingTab";

export default function ProductDetailsTabs({ productDetails }) {
  const [activeTab, setActiveTab] = useState("details");

  function getActiveTab() {
    switch (activeTab) {
      case "details":
        return <DetailsTab productDetails={productDetails} />;
      case "reviews":
        return <ReviewsTab productDetails={productDetails} />;
      case "shipping":
        return <ShippingTab />;
      default:
        return <DetailsTab />;
    }
  }

  return (
    <>
      <section className="container py-10">
        <div className=" bg-white rounded-lg">
          {/* Header */}
          <header className="border-b border-gray-100 text-15">
            <div className="flex">
              <button
                className={`px-4 py-3 font-medium text-gray-600 ${
                  activeTab === "details" && "text-primary-600 border-b "
                }`}
                onClick={() => {
                  setActiveTab("details");
                }}
              >
                Product Details
              </button>
              <button
                className={`px-4 py-3 font-medium text-gray-600 ${
                  activeTab === "reviews" && "text-primary-600 border-b "
                }`}
                onClick={() => {
                  setActiveTab("reviews");
                }}
              >
                Reviews ({productDetails.ratingsQuantity})
              </button>
              <button
                className={`px-4 py-3 font-medium text-gray-600 ${
                  activeTab === "shipping" && "text-primary-600 border-b "
                }`}
                onClick={() => {
                  setActiveTab("shipping");
                }}
              >
                Shipping & Returns
              </button>
            </div>
          </header>

          {/* Body */}
          <div className="px-6 py-4">{getActiveTab()}</div>
        </div>
      </section>
    </>
  );
}
