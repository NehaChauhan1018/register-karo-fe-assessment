import React from "react";

const TrustedBy = () => {
  return (
    <div className="w-[70%] m-auto flex flex-col gap-4">
      <h2 className="text-[#393939] my-8 text-xl font-medium">Trusted by the world’s largest companies</h2>
      <div className="grid grid-cols-6 pb-10">
        <img src="/partners/springHouse.png" className="col-span-1 w-32 h-8" />
        <img src="/partners/slack.png" className=" col-span-1 w-32 h-8" />
        <img src="/partners/weWork.png" className=" col-span-1 w-32 h-8" />
        <img src="/partners/oyo.png" className="col-span-1 w-32 h-8" />
        <img src="/partners/razorPay.png" className="col-span-1 w-32 h-8" />
        <img src="/partners/icici.png" className="col-span-1 w-32 h-8" />
      </div>
    </div>
  );
};

export default TrustedBy;
