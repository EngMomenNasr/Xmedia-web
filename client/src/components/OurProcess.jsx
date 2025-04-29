import React from "react";

const OurProcess = () => {
  return (
    <div className="flex flex-col items-center md:bg-center lg:bg-left xl:bg-top bg-slate-900 text-white px-6 py-5 english-text overflow-clip">
      <h1
        className="text-xl font-poppins text-center w-full text-red-700"
        data-aos="fade-up"
      >
        Our Process
      </h1>

      <div
        className="p-5 mt-2 flex items-center justify-start gap-6 w-full max-w-4xl"
        data-aos="fade-right"
      >
        <div className="bg-slate-300 rotate-6 rounded-full shrink-0">
          <img src="./1-discover.svg" alt="discover" width="150px" />
        </div>
        <div>
          <h3 className="text-[16px] md:text-xl font-semibold mb-2">
            Discover Needs
          </h3>
          <p className="text-[13px] md:text-sm text-slate-300">
            We dive deep into your vision to uncover real opportunities that matter.
          </p>
        </div>
      </div>

      <div
        className="p-5 mt-2 flex items-center justify-end gap-6 w-full max-w-4xl"
        data-aos="fade-left"
      >
        <div>
          <h3 className="text-[15px] md:text-xl font-semibold mb-2">
            Create Solutions
          </h3>
          <p className="text-[13px] md:text-sm text-slate-300">
            Our team transforms bold ideas into stunning, functional designs.
          </p>
        </div>
        <div className="bg-slate-300 -rotate-[4deg] rounded-full shrink-0">
          <img src="./2-create.svg" alt="create" width="150px" />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
