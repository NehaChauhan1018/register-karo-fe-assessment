import React from "react";

const cardDetails = [
  {
    img: "/icons/virtual1.png",
    title: "Company Registration",
    description:
      "Create your ideal workspace with options for furniture and layout customization.",
  },
  {
    img: "/icons/virtual2.png",
    title: "Streamlined GST Registration",
    description:
      "Work in a space equipped with state-of-the-art technology and facilities.",
  },
  {
    img: "/icons/virtual3.png",
    title: "Centralized Business Hub",
    description:
      "Establish your presence in key business districts with our prestigious addresses.",
  },
  {
    img: "/icons/virtual4.png",
    title: "Efficient Call Management",
    description:
      "Establish your presence in key business districts with our prestigious addresses.",
  },
  {
    img: "/icons/virtual5.png",
    title: "Flexible Meeting Solutions",
    description:
      "Establish your presence in key business districts with our prestigious addresses.",
  },
];

const Card = ({ item }) => {
  return (
    <div className="flex mb-6 gap-2 items-center w-full">
      <div className=" flex items-center">
        <img
          src={item.img}
          alt={item.title}
          className="w-28 h-28 object-cover"
        />
      </div>
      <div className=" p-6 flex flex-col justify-center w-full">
        <h3 className="text-[#2962FF] font-medium text-xl mb-2">{item.title}</h3>
        <p className="text-[#393939] font-light text-sm">{item.description}</p>
      </div>
    </div>
  );
};

const Virtual = () => {
  return (
    <section className="w-[80%] mx-auto my-16">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-light mt-10 mb-10">Use Virtual Address For</h2>
          {cardDetails.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <div className="w-[80%] m-auto">
          <img
            src="/virtual.png"
            alt="Workspace Solution"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Virtual;
