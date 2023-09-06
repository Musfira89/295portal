"use client";
import React, { useEffect, useState, useContext } from "react";
import { CampaignContext } from "../../../components/utils/contextWrapper";
import axios from "axios";

const Dashboard = () => {
  const [camp, setCamp] = useState();
  const { state, dispatch } = useContext(CampaignContext);
  const [online, setonline] = useState({ online: false, campid: 0 });

  async function getcampaign() {
    const res = await axios.get("/api/campaign");
    if (res.status === 200) {
      dispatch({ type: "GET_CAMPAIGN", payload: res.data.response });
    }
  }

  async function Availability() {
    const res = await axios.post("/api/availability?userid:1", online);
    console.log("response : ", res);
  }
  useEffect(() => {
    Availability();
  });
  useEffect(() => {
    getcampaign();
  }, []);
  useEffect(() => {
    setCamp(state);
  }, [state]);

  return (
    <div className="flex flex-wrap py-10 px-10 gap-6 ">
      {camp &&
        camp.map((c, ind) => (
          <div className="bg-black" key={ind}>
            <div className="bg-[#ff914d] p-2 w-full flex justify-center font-semibold">
              {c.campaign}
            </div>
            {Object.entries(c)
              .slice(2)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center gap-16 p-4 "
                >
                  <div className="text-slate-200">{key}</div>
                  <div className="text-slate-200">{value}</div>
                </div>
              ))}
            <button
              onClick={() => setonline({ online: !online, campid: c.id })}
              className="text-white "
            >
              Start Working
            </button>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
