export default function BrandsSkeleton() {
  return (
    <>
      <section>
        {/* Top Skeleton */}
        <div className="container text-center space-y-3 py-10">
          <div className="h-8 w-64 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-5 w-2/3 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        {/* middle Skeleton */}
        <div className="bg-gray-100">
          <div className="container">
            {/* search input skeleton */}
            <div className="py-10">
              <div className="flex justify-between items-center">
                <div className="relative w-72">
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
            {/* brands skeleton */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-10">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="bg-white rounded-md overflow-hidden border border-gray-200">
                  <div className="h-32 w-full bg-gray-200 animate-pulse" />
                  <div className="border-t border-t-gray-200">
                    <div className="h-5 w-24 bg-gray-200 rounded mx-auto my-2 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
