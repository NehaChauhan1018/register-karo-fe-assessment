import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white w-[99%] my-20 rounded-2xl p-6">
      <h3 className="text-[#383838] text-xl font-bold">Get in touch with us</h3>
      <p className="text-sm font-normal text-[#667085]">
        Become a career progressive school with LaunchMyCareer.
      </p>

      <form className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col">
          <label className="text-[#344054]">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="p-2 border border-gray-300 rounded-md placeholder-[#667085]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#344054]">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="p-2 border border-gray-300 rounded-md placeholder-[#667085]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#344054]">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            className="p-2 border border-gray-300 rounded-md placeholder-[#667085]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#344054]">Designation</label>
          <input
            type="text"
            placeholder="Enter your designation"
            className="p-2 border border-gray-300 rounded-md placeholder-[#667085]"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <label className="text-[#344054]">Mobile</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="p-2 border border-gray-300 rounded-md placeholder-[#667085]"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <label className="text-[#344054]">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-2 border border-gray-300 rounded-md placeholder-[#667085]"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#3424C2] rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
