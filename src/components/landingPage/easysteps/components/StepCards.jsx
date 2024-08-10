import Image from "next/image";

const StepCard = ({ icon, text, para }) => (
  <div className="flex flex-col items-start bg-[#EEEDF4] shadow-lg rounded-lg w-full h-[182.26px] border-b-[7px] border-[#3424C2] transition-colors hover:bg-[#3424C2] hover:text-white relative group">
    <div className="mb-4 flex  justify-between w-[90%] mx-auto my-4">
      <Image src={icon} alt={`${text} icon`} className="h-12 w-12" />
      <h2 className="text-8xl font-bold mb-2 text-white p-0 absolute right-12 top-0 -translate-y-4">
        {text}
      </h2>
    </div>
    <div className="h-full flex items-end w-18 p-6">
      <p className="font-bold text-center text-[#252B42] group-hover:text-white">
        {para}
      </p>
    </div>
  </div>
);
export default StepCard;
