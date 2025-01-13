import React from "react";

const LocationSearchPanel = () => {
  // sample array for location
  return (
    <div>
      {/* this is just a sample data */}
      <div className="my-2 flex items-center justify-start gap-4 rounded-xl border-2 border-gray-100 p-3 active:border-black">
        <h2 className="flex h-10 w-12 items-center justify-center rounded-full bg-[#eee] p-2">
          <i className="ri-map-pin-fill text-xl"></i>
        </h2>
        <h4 className="text-sm font-semibold">
          24B, Near Kapoor's cafe, Sheryians coding School, Bhopal
        </h4>
      </div>{" "}
    </div>
  );
};

export default LocationSearchPanel;
