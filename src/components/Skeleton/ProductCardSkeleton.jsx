export default function ProductCardSkeleton() {
  return (
    <>
      <div className="transition-all duration-200 bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
        {/* image-cover skeleton */}
        <div className="relative">
          <div className="h-52 w-full bg-gray-200 animate-pulse" />

          <div className="absolute top-3 left-3">
            <div className="h-6 w-14 bg-gray-200 rounded-md animate-pulse" />
          </div>

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="size-7 rounded-full bg-gray-200 animate-pulse" />
            ))}
          </div>
        </div>

        {/* Content skeleton */}
        <div className="content p-3 space-y-3">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="flex items-center gap-3">
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-2 items-center">
              <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-14 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="size-8 rounded-full bg-gray-200 animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
}
