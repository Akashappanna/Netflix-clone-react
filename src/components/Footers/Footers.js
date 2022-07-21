import React from "react";

const Footers = () => {
  return (
    <div className="bg-black py-8">
      <h3 className="text-neutral-400 text-start text-lg w-3/4 m-auto">
        Questions? Call 000-800-040-1843
      </h3>
      <div className="flex flex-grow py-4 text-neutral-400 text-sm text-start w-3/4 m-auto">
        <span className="inline-block w-full">FAQ</span>
        <span className="inline-block  w-full">Help Centre</span>
        <span className="inline-block w-full">Account</span>
        <span className="inline-block w-full">Media Centre</span>
      </div>

      <div className="flex flex-grow py-3 text-neutral-400 text-sm text-start w-3/4 m-auto">
        <span className="inline-block w-full">Investor Relations</span>
        <span className="inline-block  w-full">Jobs</span>
        <span className="inline-block w-full">Ways to Watch</span>
        <span className="inline-block w-full">Terms of Use</span>
      </div>

      <div className="flex flex-grow py-3 text-neutral-400 text-sm text-start w-3/4 m-auto">
        <span className="inline-block w-full">Privacy</span>
        <span className="inline-block  w-full">Cookie Preferences</span>
        <span className="inline-block w-full">Corporate Information</span>
        <span className="inline-block w-full">Contact Us</span>
      </div>

      <div className="flex flex-grow py-3 text-neutral-400 text-sm text-start w-3/4 m-auto">
        <span className="inline-block w-full">Speed Test</span>
        <span className="inline-block  w-full">Legal Notices</span>
        <span className="inline-block w-full">Only on Netflix</span>
        <span className="inline-block w-full"></span>
      </div>

      <div className="mt-4 w-3/4 m-auto">
        <select className="border-2 block outline-2 rounded text-white bg-transparent">
          <option className="bg-transparent" value="English">
            English
          </option>
          <option className="bg-transparent" value="other">
            other
          </option>
        </select>
      </div>

      <p className="text-start text-neutral-400 w-3/4 m-auto mt-7">
        Netflix India
      </p>
    </div>
  );
};

export default Footers;
