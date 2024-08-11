import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for the Image component

const Partners = () => (
  <section className="grid grid-cols-9 gap-4 items-center my-12 w-[86%] m-auto">
    <div className="col-span-2">
      <h2 className="font-raleway font-extrabold text-3xl  text-[#393939]">
        Trusted by the world’s largest companies
      </h2>
    </div>

    <div className="col-span-7 grid grid-cols-6 gap-8">
      <div className="flex justify-center items-center">
        <Image
          src="/partners/microsoft.png"
          alt="Company 1 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/paypal.png"
          alt="Company 2 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/disney.png"
          alt="Company 3 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/samsung.png"
          alt="Company 4 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/spotify.png"
          alt="Company 5 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/mcAfree.png"
          alt="Company 6 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/nttGroup.png"
          alt="Company 6 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/blackRock.png"
          alt="Company 6 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/hsbc.png"
          alt="Company 6 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/accenture.png"
          alt="Company 6 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/uber.png"
          alt="Company 6 Logo"
          width={130}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/partners/slack.png"
          alt="Company 6 Logo"
          width={130}
          height={50}
        />
      </div>
    </div>
  </section>
);

export default Partners;
