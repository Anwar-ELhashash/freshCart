export default function WishlistSkeleton() {
  return (
    <>
      <section className="bg-gray-100 py-15 px-5">
        <div className="container rounded-lg bg-white p-5">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4" />
          {/* Top Skeleton */}
          <div className="pb-3 border-b border-b-gray-200">
            <div className="flex justify-between items-center">
              <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
              <div className="space-x-2 flex">
                <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-36 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
          {/* Wishlist Items Skeleton */}
          <div className="pt-5 space-y-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="py-3 border-b border-b-gray-200 flex items-center justify-between gap-20"
              >
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-200 animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
                    <div className="flex gap-2 items-center">
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
                <div className="space-x-3 flex items-center">
                  <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
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
