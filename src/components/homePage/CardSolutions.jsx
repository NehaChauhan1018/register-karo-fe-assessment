import React from "react";

const CardSolutions = ({ img, head, desc }) => {
  return (
    <div
      className=" col-span-1 w-full h-[180px] rounded-lg border-[1px] grid grid-cols-3"
      style={{ borderColor: "#EEF0F2" }}
    >
      <div className="col-span-1 flex items-center justify-center">
        <img src={img} alt={head} className="w-16 h-auto rounded-l-lg " />
      </div>

      <div className="col-span-2 flex flex-col justify-between p-4">
        <div className="flex flex-col justify-between gap-8">
          <h3 className="text-[#2962FF] text-base font-medium mb-2 flex flex-col items-start">
            {head}
            <span className="w-20 border-b border-[#393939]"></span>
          </h3>

          <p className="text-[#616161] text-sm">{desc}</p>
        </div>

        <div className="flex items-end justify-start h-full ">
          <img src={"/icons/longArrow.png"} alt="icon" className="w-8 h-2" />
        </div>
      </div>
    </div>
  );
};

export default CardSolutions;
