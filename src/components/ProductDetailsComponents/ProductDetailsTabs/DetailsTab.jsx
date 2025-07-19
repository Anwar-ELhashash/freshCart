import { faLeaf, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DetailsTab({ productDetails }) {
  const { description } = productDetails;

  return (
    <>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-3">Product Description</h3>

          <p className="text-gray-500 text-15">{description}</p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 *:flex-1 ">
          <div>
            <h3 className="font-semibold mb-2">Benefits</h3>
            <ul className="space-y-1.5 list-disc list-inside text-gray-500">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum sit amet.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Product Details</h3>
            <ul className="space-y-1.5 text-gray-500">
              <li className="flex">
                <span className="w-32 font-semibold">Origin:</span> <span>Lorem, ipsum.</span>
              </li>
              <li className="flex">
                <span className="w-32 font-semibold">Cultivation:</span> <span>Lorem</span>
              </li>
              <li className="flex">
                <span className="w-32 font-semibold">Storage:</span>{" "}
                <span>Lorem ipsum dolor sit.</span>
              </li>
              <li className="flex">
                <span className="w-32 font-semibold">Shelf Life:</span>{" "}
                <span>Lorem ipsum dolor sit amet.</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">How to Store</h3>
          <p className="text-gray-500 text-15">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, ad! Recusandae
            officia repellat ad inventore tempore debitis ducimus odit dicta ea. Illum velit modi
            amet!
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Certification</h3>
          <div className="flex gap-2 *:border *:border-gray-200 *:rounded-md *:px-2 *:py-1.5 text-sm">
            <p>
              <FontAwesomeIcon className="mr-2 text-primary-600" icon={faLeaf} />
              USDA Organic
            </p>
            <p>
              <FontAwesomeIcon className="mr-2 text-primary-600" icon={faSeedling} />
              Non-GMO
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
