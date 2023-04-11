import React from "react";
import "./Feature.css";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  const {
    id, img, jobTitle,   companyName,  location,  salary, jobPerformence,  jobType,  } = feature;
    
  return (
    <div className=" border rounded p-6">
      <img src={img} alt="" />
      <h2 className="text-xl font-semibold my-4">{jobTitle}</h2>
      <p className="my-4 text-[#757575]">{companyName}</p>
      <div className="flex gap-6">
        <button className=" border-2 border-blue-300 px-4 py-2 rounded bg-gradient-to-r text-transparent  bg-clip-text from-blue-500  to-purple-500 font-semibold ">
          {jobPerformence}
        </button>
        <button className=" border-2 border-blue-300 px-4 py-2 rounded bg-gradient-to-r text-transparent  bg-clip-text from-blue-500  to-purple-500 font-semibold">
          {jobType}
        </button>
      </div>
      <div className="text-[#757575] flex gap-10 my-6">
        <p className="flex">
          <span>
            {" "}
            <MapPinIcon className="h-6 w-6" />
          </span>{" "}
          <span>{location}</span>
        </p>
        <p className="flex">
          <span>
            <CurrencyDollarIcon className="h-6 w-6  " />
          </span>{" "}
          <span>Salary :{salary}</span>
        </p>
      </div>

      <button className="nav-btn">View Details</button>
    </div>
  );
};

export default Feature;
