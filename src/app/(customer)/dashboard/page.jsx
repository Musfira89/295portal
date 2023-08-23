"use client";
import React, { useEffect, useState, useContext } from "react";
import usegetcampaign from "../../../components/utils/usegetcampaign";
import Link from "next/link";

const Dashboard = () => {
  const [camp, setCamp] = useState();
  usegetcampaign(camp, setCamp);

  return (
    <div className=" py-10 px-10 flex gap-2 flex-wrap">
      {camp &&
        camp.map((c) => (
          <div>
            {Object.entries(c).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center gap-16"
              >
                <div className="text-gray-400">{key}</div>
                <div className="text-gray-800">{value}</div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
