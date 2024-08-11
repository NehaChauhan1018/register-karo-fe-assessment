
import React from "react";

const details = [
  {
    title: "Prestigious Business Addresses",
    description:
      "Access to prestigious business addresses in key locations, enhancing your brand image and credibility.",
  },
  {
    title: "Flexible Lease Terms",
    description:
      "Tailor your lease to your business needs with options for short-term or long-term stays.",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Work in spaces equipped with the latest technology and amenities to ensure productivity.",
  },
  {
    title: "On-Demand Meeting Rooms",
    description:
      "Reserve fully equipped meeting rooms by the hour or day, perfect for presentations and client meetings.",
  },
  {
    title: "24/7 Access",
    description:
      "Work on your schedule with round-the-clock access to your workspace.",
  },
  {
    title: "Customizable Office Spaces",
    description:
      "Personalize your workspace to reflect your brand with options for furniture and layout customization.",
  },
  {
    title: "Networking Opportunities",
    description:
      "Engage with like-minded professionals and potential collaborators in a dynamic work environment.",
  },
];

const Discover = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto my-8 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-16">
        <div className="w-full md:w-[80%] mx-auto mb-8 md:mb-0">
          <img
            src="/discovery.png"
            alt="Workspace Solution"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-[#393939] text-2xl md:text-4xl mb-4 md:pr-20 font-normal">
            Discover the Ultimate Workspace Solution
          </h2>
          <p className="text-[#393939] text-sm md:text-xs font-light mb-8 md:mb-0">
            From solo entrepreneurs to growing teams, find everything you need
            under one roof. Whether it's pay-per-use plans or fixed desks, our
            flexible options cater to your unique work style, ensuring seamless
            productivity and success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.map((item, index) => (
              <div key={index} className="flex items-start gap-2 mt-6 md:mt-10">
                <div className="w-[10px] h-[4px] bg-[#393939] rounded-full mt-1"></div>
                <div>
                  <h3 className="text-[#393939] font-bold text-sm md:text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#393939] font-light text-xs md:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
