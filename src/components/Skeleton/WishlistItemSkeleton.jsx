export default function WishlistItemSkeleton() {
  return (
    <>
      <div className="py-3 border-b border-b-gray-200 flex items-center justify-between gap-20">
        {/* right */}
        <div className="flex items-center gap-2 flex-1">
          {/* image skeleton */}
          <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-200 animate-pulse" />

          {/* rating skeleton */}
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
        {/* left */}
        <div className="space-x-3 flex items-center">
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>
    </>
  );
}
