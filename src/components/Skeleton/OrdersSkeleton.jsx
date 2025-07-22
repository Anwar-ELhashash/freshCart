export default function OrdersSkeleton() {
  return (
    <>
      <section className="bg-gray-50 py-15">
        <div className="container">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4" />
            {/* orders skeleton */}
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border border-gray-200 rounded-md">
                  <div className="flex items-center gap-3 bg-gray-100 py-3 px-4">
                    <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                    <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="py-3 px-4 flex items-center *:flex-1 gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="w-16 h-16 bg-gray-200 rounded-md animate-pulse" />
                      ))}
                    </div>
                    <div>
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2" />
                      <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div>
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2" />
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div>
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2" />
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    </div>
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
