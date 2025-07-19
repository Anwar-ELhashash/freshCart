import {
  faHeadset,
  faRotateLeft,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeFeatures() {
  return (
    <>
      <div className="py-10">
        <div className="container bg-white grid md:grid-cols-2 lg:grid-cols-4 gap-3 *:border *:border-gray-100 *:rounded-md *:p-2">
          <div className="flex items-center gap-4">
            <div className="icon">
              <FontAwesomeIcon icon={faTruck} />
            </div>

            <div>
              <h4 className="font-semibold capitalize text-15">free delivery</h4>
              <p className="text-gray-500 text-13 text-nowrap">Order $50 or more</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="icon">
              <FontAwesomeIcon icon={faRotateLeft} />
            </div>

            <div>
              <h4 className="font-semibold capitalize text-15">30 days return</h4>
              <p className="text-gray-500 text-13 text-nowrap">Satisfaction guaranteed</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="icon">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>

            <div>
              <h4 className="font-semibold capitalize text-15">secure payment</h4>
              <p className="text-gray-500 text-13 text-nowrap">100% protected checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="icon">
              <FontAwesomeIcon icon={faHeadset} />
            </div>

            <div>
              <h4 className="font-semibold capitalize text-15">24/7 support</h4>
              <p className="text-gray-500 text-13 text-nowrap">Ready to help anytime</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
