export default function CartSkeleton() {
  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container grid grid-cols-6 gap-5 *:border *:border-gray-200 *:rounded-md *:bg-white *:py-4 *:shadow ">
          {/* left */}
          <div className="col-span-6 lg:col-span-4 h-fit">
            <div className="border-b border-b-gray-200 pb-4 px-4">
              <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* body */}
            <div className="p-4 flex flex-col gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-md animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 w-6 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-10 w-32 bg-gray-200 rounded animate-pulse ms-auto" />
            </div>
          </div>

          {/* right */}
          <div className="col-span-6 lg:col-span-2 px-4 space-y-5 h-fit">
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-2" />
            <ul className="space-y-2 text-15">
              {[...Array(4)].map((_, i) => (
                <li key={i} className="flex justify-between items-center">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </li>
              ))}
            </ul>
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />

            <div className="flex flex-col gap-2 *:bg-primary-100 *:rounded-md *:p-3">
              {[...Array(2)].map((_, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
