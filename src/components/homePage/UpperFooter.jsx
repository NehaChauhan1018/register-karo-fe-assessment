import React from "react";

const UpperFooter = () => {
  return (
    <footer className="bg-[#191C20] py-8">
      <div className="w-[80%] m-auto grid grid-cols-5 gap-8">
        <div className="col-span-1 flex flex-col items-start">
          <img src="/footer/logo.png" alt="App Logo" className="mb-4" />
          <div className="flex gap-4">
            <img
              src="/footer/facebook.svg"
              alt="Facebook"
              className="w-4 h-4"
            />
            <img src="/footer/insta.png" alt="Instagram" className="w-4 h-4" />
            <img
              src="/footer/linkedin.png"
              alt="LinkedIn"
              className="w-4 h-4"
            />
            <img src="/footer/twitter.png" alt="Twitter" className="w-4 h-4" />
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="text-xs font-light space-y-2 text-[#C2C2C2]">
              <li>Virtual Office</li>
              <li>GST Registration</li>
              <li>Coworking Spaces</li>
              <li>Business Registration</li>
              <li>Mailing Address</li>
              <li>Dedicated Desk</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Links</h3>
            <ul className="text-xs font-light space-y-2 text-[#C2C2C2]">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Find Location</li>
              <li>FAQ's</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Other Links</h3>
            <ul className="text-xs font-light space-y-2 text-[#C2C2C2]">
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Terms & Conditions</li>
              <li>Cookies</li>
              <li>Refund policy</li>
            </ul>
          </div>
        </div>

        <div className="col-span-2">
          <h3 className="text-xs font-medium mb-4 text-white">
            Join the newsletter
          </h3>
          <div className="flex mb-6">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-8p-2 rounded-l-md border"
            />
            <button className="bg-[#2962FF] text-white px-4 py-2 rounded-r-md text-xs">
              Subscribe
            </button>
          </div>
          <p className="text-xs  mb-4 text-white font-bold">
            Feel free to connect with us:
          </p>
          <p className="text-xs font-light mb-4 text-[#C2C2C2]">
            +91 93112 21210 | virtualoffice@teamco.work
          </p>
          <p className="text-xs font-light text-[#C2C2C2]">
            704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122007
          </p>
        </div>
      </div>
    </footer>
  );
};

export default UpperFooter;
