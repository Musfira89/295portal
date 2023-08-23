"use client";
import React, { useEffect, useState, useContext } from "react";
import usegetcampaign from "../../../components/utils/usegetcampaign";
import Link from "next/link";

const Dashboard = () => {
  const [camp, setCamp] = useState();
  usegetcampaign(camp, setCamp);

  return (
    <div className="flex flex-wrap py-10 px-10 gap-6 ">
      {camp &&
        camp.map((c) => (
          <div className="bg-black ">
            {Object.entries(c).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center gap-16 p-4 "
              >
                <div className="text-slate-200">{key}</div>
                <div className="text-slate-200">{value}</div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
