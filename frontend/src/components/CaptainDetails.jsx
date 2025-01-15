import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="person.jpg"
            alt="person"
          />
          <h4 className="text-lg font-medium">Rahul Karak </h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹250.26</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="mt-6 flex items-start justify-center gap-5 rounded-xl bg-gray-100 p-3">
        <div className="text-center">
          <i className="ri-timer-2-line mb-2 text-3xl font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-line mb-2 text-3xl font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-booklet-line mb-2 text-3xl font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
