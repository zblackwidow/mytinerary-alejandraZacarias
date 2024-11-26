
export default function Loading() {
  return (
    <div className=" shadow rounded-md p-4 my-2 mx-8  w-[20vw]">
      <div className="animate-pulse flex space-x-4">
        <div className=" bg-slate-800 h-20 w-20"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-800 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-800 rounded col-span-2"></div>
              <div className="h-2 bg-slate-800 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-800 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
