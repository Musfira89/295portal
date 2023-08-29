"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const camplist = [
  {
    title: "Campaign",
    value: "",
  },
  {
    title: "DDV/Without DDV",
    value: "",
  },
  {
    title: "PAYOUT",
    value: 0,
  },
  {
    title: "NET",
    value: 0,
  },
  {
    title: "STATES",
    value: "",
  },
  {
    title: "DID NUMBER",
    value: 0,
  },
  {
    title: "TIMINGS",
    value: "",
  },
  {
    title: "FORM",
    value: "",
  },
];

// change value of input and store it in its respective object
const Addcampaign = () => {
  const [camp, setCamp] = useState(camplist);
  const router = useRouter();

  function handleChange(index, newValue) {
    const updatedCamp = [...camp]; // Create a shallow copy of the array
    updatedCamp[index].value = newValue; // Update the specific object's value
    setCamp(updatedCamp);
  }
  // after successful post request, emoty fields of input
  async function handleSubmit() {
    const res = await axios.post("/api/campaign", camp);
    if (res.status === 200) {
      setCamp([]);
      router.push("/campaign");
    }
  }

  return (
    <div className="px-10 py-10 flex flex-col gap-4">
      {camp.map((item, index) => (
        <div
          className="flex flex-col  items-start w-full lg:flex-row gap-6 
          lg:justify-between lg:w-1/3"
        >
          <label className="font-semibold"> {item.title}</label>
          <input
            type="text"
            value={item.value}
            onChange={(e) => handleChange(index, e.target.value)}
            className="border-[1px] border-gray-300 rounded-md px-2 py-1"
          />
        </div>
      ))}
      <button
        className={`bg-[#ff914d] rounded-md px-4 py-2 text-white text-sm font-light tracking-wider 
        hover:bg-[#f28a4a] shadow-lg transition duration-200 ease-in-out w-40`}
        onClick={() => handleSubmit()}
      >
        ADD CAMPAIGN
      </button>
    </div>
  );
};

export default Addcampaign;
