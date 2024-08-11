import Image from "next/image";
import FooterLogo from "@/assets/FooterLogo.png";

const Footer = () => (
  <footer className="bg-[#191C20] text-white py-10">
    <div className="w-[90%] mx-auto flex justify-between items-end gap-10">
      <div className="w-1/3 text-center sm:text-left">
        <Image className="mb-10" src={FooterLogo} />
        <h3 className="text-[40px] mb-5  font-semibold">
          Speak to Our Experts
        </h3>
        <p className="text-[16px] mb-8">
          Please don't hesitate to reach out to us. Our team of experts is
          always available and prepared to address and resolve any inquiries you
          may have..
        </p>
        <button className="bg-[#23A6F0] px-6 py-4">Enquire now</button>
      </div>
      <div className="w-2/3 text-center justify-center sm:text-right flex gap-10 flex-wrap">
        <div className="grid grid-cols-2 gap-3">
          <div className="w-full bg-[#ECECEC] py-[12px] px-[32px] text-black text-left rounded-[8px] col-span-1">
            <p className="mb-[6px]">Email:</p>
            <p>virtualoffice@teamco.work</p>
          </div>
          <div className="w-full bg-[#ECECEC] py-[12px] px-[32px] text-black text-left rounded-[8px] col-span-1">
            <p className="mb-[6px]">Telephone:</p>
            <p>+91 93112 21210</p>
          </div>
        </div>
        <div className="w-[446px] bg-[#ECECEC] py-[12px] px-[32px] text-black text-left rounded-[8px] ">
          <p className="mb-[6px]">Location:</p>
          <p>704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana, 122007</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
