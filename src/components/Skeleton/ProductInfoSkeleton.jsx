export default function ProductInfoSkeleton() {
  return (
    <>
      <section className="container py-8">
        <div className="grid grid-cols-12 gap-5">
          {/* Images Skeleton */}
          <div className="col-span-12 md:col-span-4 overflow-hidden rounded-lg">
            <div className="h-96 w-full bg-gray-200 rounded-lg animate-pulse" />
            <div className="flex gap-2 mt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 w-16 bg-gray-200 rounded-md animate-pulse" />
              ))}
            </div>
          </div>

          {/* Product Details Skeleton */}
          <div className="col-span-12 md:col-span-8 p-4 rounded-lg bg-white">
            {/* Top Skeleton */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="flex gap-2">
                  <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="h-7 w-48 bg-gray-200 rounded animate-pulse" />
              <div className="flex gap-2 items-center">
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            <hr className="text-gray-300 my-5" />

            {/* Middle Skeleton */}
            <div className="space-y-5">
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="flex items-center gap-4">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
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
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex gap-3 *:flex-1 *:py-2">
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            <hr className="text-gray-300 my-5" />

            {/* Bottom Skeleton */}
            <div>
              <div className="flex justify-between items-center gap-10">
                <div className="flex flex-col lg:flex-row items-center gap-3">
                  <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-3">
                  <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
