export default function CartItemSkeleton() {
  return (
    <>
      <section className="flex justify-between flex-col items-start gap-4 md:flex-row md:gap-16 md:items-center border-b border-b-gray-100 pb-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-200 animate-pulse" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="flex items-center gap-2">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-6 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-6 border border-gray-200 rounded-md bg-white px-2 py-1">
            <li>
              <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse" />
            </li>
            <li>
              <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
            </li>
            <li>
              <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse" />
            </li>
          </ul>
          <div className="font-semibold w-22 text-center">
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse ml-2" />
        </div>
      </section>
    </>
  );
}
