export default function OrderCardSkeleton() {
  return (
    <>
      <div className="border border-gray-200 rounded-md">
        {/* Header skeleton */}
        <div className="flex items-center gap-3 bg-gray-100 py-3 px-4">
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
        {/* Body skeleton */}
        <div className="py-3 px-4 flex items-center *:flex-1 gap-4">
          {/* images skeleton */}
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gray-200 rounded-md animate-pulse" />
            ))}
          </div>
          {/* items skeleton */}
          <div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
          </div>
          {/* Total Amount skeleton */}
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
          </div>
          {/* address skeleton */}
          <div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
}
