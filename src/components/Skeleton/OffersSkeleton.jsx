export default function OffersSkeleton() {
  return (
    <>
      <section className="py-8">
        <div className="container">
          <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse mb-6" />
          {/* Counter Skeleton */}
          <div className="mb-4">
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-2 mx-auto" />
            <div className="flex gap-3 items-center justify-center">
              <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          {/* Cards Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 pt-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-md p-3">
                <div className="h-40 w-full bg-gray-200 rounded animate-pulse mb-3" />
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
