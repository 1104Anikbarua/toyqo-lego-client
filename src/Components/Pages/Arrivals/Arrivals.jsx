import React from "react";

const Arrivals = () => {
  return (
    <div className="w-full my-32 max-w-7xl px-5 lg:px-0 mx-auto">
      <h1 className="font-roboto font-bold text-7xl text-center mb-5">
        New Arrival&apos;s
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="w-full lg:w-1/2 relative">
          <img
            className="block h-full w-full rounded-lg object-fill object-center 
                        hover:-translate-y-5 hover:blur-[3px] transition duration-700 ease-linear"
            src="https://res.cloudinary.com/dmqgkr30q/image/upload/v1684658256/james_bond_aston_maritin_1_wmjgwr.png"
            alt=""
          />
          <h1 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-roboto font-bold">
            {" "}
            Aston Martin
          </h1>
        </div>
        <div className="w-full relative">
          <img
            className="block h-full w-full rounded-lg object-fill object-center hover:translate-y-5 hover:blur-[3px] transition duration-700 ease-linear"
            src="https://res.cloudinary.com/dmqgkr30q/image/upload/v1684529713/knight-bus_1_rdktjd.png"
            alt=""
          />
          <h1 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl lg:text-4xl font-roboto font-bold">
            The Knight Bus™
          </h1>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <img
            className="block h-full w-full rounded-lg object-fill object-center hover:-translate-y-5 hover:blur-[3px] transition duration-700 ease-linear"
            src="https://res.cloudinary.com/dmqgkr30q/image/upload/v1684657958/pickup_truck_1_olkcpl.png"
            alt=""
          />
          <h1 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-roboto font-bold">
            {" "}
            Pickup Truck
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
