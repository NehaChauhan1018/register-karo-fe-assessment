import React from "react";

const WorkspaceCard = ({
  src,
  title,
  description,
  price,
  features,
  isLastCard,
}) => {
  return (
    <div
      className={`w-[full] h-full  rounded-lg flex flex-col col-span-1 justify-between ${
        isLastCard ? "bg-[#333333] text-white" : "bg-white"
      }`}
    >
      <div>
        <img src={src} className="rounded-lg " />
        <div className="p-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <p
              className={`mb-6 text-sm ${
                isLastCard ? "text-white" : "text-gray-700"
              }`}
            >
              {description}
            </p>
            <div className="flex flex-col gap-4 mb-6 text-xs">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <img src={feature.icon} alt="icon" className="w-4 h-4 mr-2" />
                  <span>{feature.info}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h4 className="text-base font-normal text-[#008385] mb-4 ">{price}</h4>
        <div className="flex gap-2  items-center justify-center">
          <button className="bg-[#2962FF] text-white rounded-full text-xs px-3 py-2">
            Get a quote
          </button>
          <button className="bg-transparent border border-[#2962FF] text-[#2962FF] px-3 py-2 rounded-full text-xs ">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

const FlexibleWorkspace = () => {
  return (
    <section className="w-[85%] mx-auto ">
      <div className="mb-8 text-left ">
        <h2 className="text-xl text-[#393939] font-normal pt-10">
          Flexible workspace designed around your needs
        </h2>
      </div>
      <div className="flex justify-center gap-4 mb-6 border border-gray-300 rounded-full bg-white">
        {["Office Space", "Coworking", "Virtual Offices", "Meeting rooms"].map(
          (label, index) => (
            <button
              key={index}
              className={`w-[300px] h-[52px] rounded-full ${
                index === 0 ? "bg-[#4CAF50] text-white" : "bg-transparent"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>
      <p className="text-left text-[#393939] mb-3 text-sm font-light">
        Our flexible, fully-customisable office rentals are available by the
        hour, day, or as long as you need.
      </p>
      <div className="grid grid-cols-5 gap-6">
        {[
          {
            src: "/flexibleWS1.png",
            title: "Private offices",
            description:
              "A range of ready-to-use, fully equipped offices with everything you need to get started.",
            price: "From $89 per person per month",
            features: [
              { icon: "/icons/flexibleWSIcon1.png", info: "By month or year" },
              { icon: "/icons/flexibleWSIcon2.png", info: "Teams of any size" },
            ],
          },
          {
            src: "/flexibleWS2.png",
            title: "Custom Offices",
            description:
              "When off-the-shelf simply isn't enough. Customise all aspects of your space, including furniture and branding.",
            price: "From $89 per person per month",
            features: [
              {
                icon: "/icons/flexibleWSIcon1.png",
                info: "By month or year + customised",
              },
              { icon: "/icons/flexibleWSIcon2.png", info: "Teams of any size" },
            ],
          },
          {
            src: "/flexibleWS3.png",
            title: "Day Offices",
            description:
              "A professional on-demand office space. Perfect when you need to get your head down and do your best work.",
            price: "From $ 25 per day Get a quote",
            features: [
              {
                icon: "/icons/flexibleWSIcon1.png",
                info: "High-speed internet",
              },
              { icon: "/icons/flexibleWSIcon2.png", info: "Office furniture" },
            ],
          },
          {
            src: "/flexibleWS4.png",
            title: "Teams of any size",
            description:
              "A range of ready-to-use, fully equipped offices with everything you need to get started.",
            price: "From $89 per person per month",
            features: [
              {
                icon: "/icons/flexibleWSIcon1.png",
                info: "High-speed internet",
              },
              { icon: "/icons/flexibleWSIcon2.png", info: "Office furniture" },
            ],
          },
          {
            src: "/flexibleWS5.png",
            title: "Need a helping hand?",
            description: "Arrange a 1:1 call with a professional advisor.",
            price: "Contact us for pricing",
            features: [
              { icon: "/icons/flexibleWSIcon1.png", info: "Flexible terms" },
              { icon: "/icons/flexibleWSIcon2.png", info: "Global access" },
              {
                icon: "/icons/flexibleWSIcon1.png",
                info: "High-speed internet",
              },
              { icon: "/icons/flexibleWSIcon2.png", info: "Office furniture" },
            ],
            isLastCard: true,
          },
        ].map((card, index) => (
          <WorkspaceCard
            key={index}
            src={card.src}
            title={card.title}
            description={card.description}
            price={card.price}
            features={card.features}
            isLastCard={card.isLastCard}
          />
        ))}
      </div>
    </section>
  );
};

export default FlexibleWorkspace;
