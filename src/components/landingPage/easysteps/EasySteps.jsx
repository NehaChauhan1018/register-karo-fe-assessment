import StepCard from "./components/StepCards";
import Build from "@/assets/build.svg";
import File from "@/assets/file.svg";
import Phone from "@/assets/phone.svg";

const EasySteps = () => (
  <section className="w-[80%] m-auto items-start">
    <h2 className="text-2xl  mb-4 text-[#252B42] font-medium">
      Get Your Virtual Office Up and Running in<strong> 3 Easy Steps!</strong>
    </h2>
    <p className="text-xl font-normal text-[#667085] mb-8">
      Procedure to obtain Virtual office address.
    </p>
    <div className="grid grid-cols-3 items-center justify-center w-full gap-12">
      <div className="col-span-1">
        <StepCard icon={Phone} text="1" para="Connect with RegisterKaro" />
        <p className="text-sm text-left text-[#737373]">
          Reach out to our friendly customer support team through chat, email,
          or phone. They'll guide you through the process.
        </p>
      </div>
      <div className="col-span-1">
        <StepCard
          icon={File}
          text="2"
          para="Give Essential Details & Documents"
        />
        <p className="text-sm text-left text-[#737373]">
          Upload essential documents required for registration, following our
          clear and secure guidelines.
        </p>
      </div>

      <div className="col-span-1">
        <StepCard
          icon={Build}
          text="3"
          para="Receive Your Virtual Office Address"
        />
        <p className="text-sm text-left text-[#737373]">
          Once your application is approved, your virtual office is activated
          instantly!
        </p>
      </div>
    </div>
  </section>
);

export default EasySteps;
