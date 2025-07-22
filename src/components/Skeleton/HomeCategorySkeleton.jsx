export default function HomeCategorySkeleton() {
  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container">
          <div className="flex justify-between items-center mb-2">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="card bg-white rounded-xl shadow flex flex-col items-center py-4 gap-2 cursor-pointer"
              >
                <div className="size-16 rounded-full bg-gray-200 animate-pulse mb-2" />
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
