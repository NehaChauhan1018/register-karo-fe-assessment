import React from "react";

const TestimonialsClient = () => {
  return (
    <div className="grid grid-cols-3 w-[80%] m-auto py-12">
      <div className="col-span-2 w-[90%] m-auto">
        <img src="/testimonialsClient.png "  />
      </div>
      <div className="flex flex-col gap-4 col-span-1 justify-center items-end">
        <h2 className="text-3xl font-medium text-[#393939]">
          Client Testimonials
        </h2>
        <p className="text-sm font-light text-[#393939] text-right">
          We love hearing feedback from our valued clients.<br/> Here's what some of
          our satisfied customers have to say about our services.
        </p>
      </div>
    </div>
  );
};

export default TestimonialsClient;
