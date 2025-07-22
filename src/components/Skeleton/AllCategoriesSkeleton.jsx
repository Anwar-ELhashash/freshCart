export default function AllCategoriesSkeleton() {
  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container space-y-15">
          <div className="text-center space-y-2">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse" />
            <div className="h-5 w-80 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
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
