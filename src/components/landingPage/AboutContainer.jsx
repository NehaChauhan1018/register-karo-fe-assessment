import Image from "next/image";
import React from "react";

const items = [
  {
    icon: "/icons/aboutIcon1.png",
    title: "Professional Image & Enhanced Credibility",
    description:
      "Elevate your company's image and attract top talent with a professional virtual address for websites, business cards, and marketing materials.",
  },
  {
    icon: "/icons/aboutIcon2.png",
    title: "Streamlined Business Operations",
    description:
      "Access essential services like virtual assistants, answering services, and teleconferencing – all under one roof.",
  },
  {
    icon: "/icons/aboutIcon3.png",
    title: "Scalable & Cost-Effective Solution",
    description:
      "Choose a virtual office plan that fits your needs and budget, with options for various locations and service levels.",
  },
  {
    icon: "/icons/aboutIcon4.png",
    title: "Unmatched Work Flexibility",
    description:
      "Improve work-life balance by eliminating commutes and allowing flexible schedules.",
  },
];

const Card = ({ icon, title, description }) => (
  <div className="col-span-1 items-start p-4 shadow-lg rounded-lg flex flex-col pr-12">
    <div className="mb-4">
      <Image
        src={icon}
        alt={`${title} icon`}
        className="h-12 w-12"
        width={48}
        height={48}
      />
    </div>
    <h3 className="font-raleway font-semibold text-[21.18px] leading-[31.77px] mb-2">
      {title}
    </h3>
    <p className="font-raleway text-[#353535] text-base font-light">
      {description}
    </p>
  </div>
);

const AboutContainer = () => {
  return (
    <section className="w-[90%] m-auto rounded-[30px] p-20 bg-[#F4F4F4] shadow-lg mt-14 mx-auto ">
      <h2 className="font-raleway font-medium text-[32px] leading-[31.77px] mb-6">
        Accessible. Affordable. Adaptable.
      </h2>
      <p className="font-raleway text-[14px] leading-[18.15px] mb-8 text-left text-[#353535] text-base font-light">
        Whether you're an established enterprise or a scaling startup, your
        Virtual office should drive your business forward. Our virtual office
        solutions take your business places!
      </p>

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 gap-6 grid grid-cols-2">
          {items.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="flex justify-center items-center col-span-2">
          <Image
            src="/aboutImg.png"
            alt="Illustration"
            className="w-full h-full rounded-[15px]"
            width={100}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
