export default function ProductDetailsTabsSkeleton() {
  return (
    <>
      <section className="container py-10">
        <div className="bg-white rounded-lg">
          {/* Header Skeleton */}
          <header className="border-b border-gray-100 text-15">
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="px-4 py-3 mr-2 h-6 w-32 bg-gray-200 rounded animate-pulse"
                />
              ))}
            </div>
          </header>

          {/* Body Skeleton */}
          <div className="px-6 py-4">
            <div className="space-y-4">
              <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
