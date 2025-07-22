export default function RelatedProductsSkeleton() {
  return (
    <>
      <div className="container py-10 space-y-8">
        <div className="flex justify-between items-center">
          <div className="h-7 w-56 bg-gray-200 rounded animate-pulse" />
          <div className="flex gap-3">
            <div className="size-7 rounded-full bg-gray-200 animate-pulse" />
            <div className="size-7 rounded-full bg-gray-200 animate-pulse" />
          </div>
        </div>
        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
          {[...Array(4)].map((_, i) => (
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
    </>
  );
}
