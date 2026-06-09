import React from "react";

const StatsBar = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 px-3 md:px-6">
      <div className="pointer-events-auto max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 bg-white text-dark rounded-xl shadow-lg overflow-hidden">

        <div className="text-center py-6 border-r border-gray-200">
          <h3 className="heading-3 font-bold">500+</h3>
          <p className="text-sm opacity-80">Happy Clients</p>
        </div>

        <div className="text-center py-6 border-r border-gray-200">
          <h3 className="heading-3 font-bold">1,200+</h3>
          <p className="text-sm opacity-80">Jobs Completed</p>
        </div>

        <div className="text-center py-6 border-r border-gray-200">
          <h3 className="heading-3 font-bold">5 Years</h3>
          <p className="text-sm opacity-80">Experience</p>
        </div>

        <div className="text-center py-6">
          <h3 className="heading-3 font-bold">24/7</h3>
          <p className="text-sm opacity-80">Support</p>
        </div>

      </div>
    </div>
  );
};

export default StatsBar;
