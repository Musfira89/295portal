"use client";
import Buttons from "@/components/view/buttons";
import React, { useState } from "react";
const camplist = [
  {
    title: "Campaign",
    value: "FE",
  },
  {
    title: "DDV/Without DDV",
    value: "WITHOUT",
  },
  {
    title: "PAYOUT",
    value: "$16",
  },
  {
    title: "STATES",
    value: "CA GA VA",
  },
  {
    title: "DID NUMBER",
    value: "12345666",
  },
  {
    title: "TIMINGS",
    value: "8TO5PM",
  },
  {
    title: "FORM",
    value: "LINK",
  },
];

// change value of input and store it in its respective object
const Addcampaign = () => {
  const [camp, setCamp] = useState(camplist);
  function handleChange() {
    const updatedCamp = camp.map((item, i) =>
      i === index ? { ...item, value: newValue } : item
    );

    setCamp(updatedCamp);
  }
  return (
    <div className="px-10 py-10 flex flex-col gap-4">
      {camp.map((item, index) => (
        <div className="flex gap-6">
          <label className="font-semibold"> {item.title}</label>
          <input
            type="text"
            value={item.value}
            onChange={(e) => handleChange(index, e.target.value)}
            className="border-[1px] border-gray-300 rounded-md px-2 py-1"
          />
        </div>
      ))}
      <Buttons text={"ADD CAMPAIGN"} width={"w-40"} />
    </div>
  );
};

export default Addcampaign;
