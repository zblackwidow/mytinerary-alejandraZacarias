import React from "react";

export default function Loading() {
  return (
    <div class="shadow rounded-md p-4 my-2 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class=" bg-slate-800 h-20 w-20"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-800 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-800 rounded col-span-2"></div>
              <div class="h-2 bg-slate-800 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-800 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
