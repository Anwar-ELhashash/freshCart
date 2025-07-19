export default function ShippingTab() {
  return (
    <>
      <div className="space-y-4">
        <h3 className="font-semibold text-xl">Shipping & Returns</h3>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 justify-between text-gray-600">
          <ul className="space-y-3">
            <li className="font-semibold">Shipping Information</li>
            <li className="flex">
              <span className="w-32">Standard:</span>
              <span>3-5 Business Days ($4.99)</span>
            </li>
            <li className="flex">
              <span className="w-32">Express:</span>
              <span>1-2 Business days ($9.99)</span>
            </li>
            <li className="flex">
              <span className="w-32">Free Shipping:</span>
              <span>Order Over $50</span>
            </li>
          </ul>

          <ul className="space-y-3">
            <li className="font-semibold">Return Policy</li>
            <li className="flex">
              <span className="w-28">Time Limit:</span>
              <span>30 Days</span>
            </li>
            <li className="flex">
              <span className="w-28">Condition:</span>
              <span>Unopened original packaging</span>
            </li>
            <li className="flex">
              <span className="w-28">Refund:</span>
              <span>Full refund available</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
