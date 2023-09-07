"use client";
import React, { useEffect, useState, useContext } from "react";
import { CampaignContext } from "../../../components/utils/contextWrapper";
import axios from "axios";

const Dashboard = () => {
  const [camp, setCamp] = useState();
  const { state, dispatch } = useContext(CampaignContext);
  const [isonline, setonline] = useState({
    online: false,
    payout: 0,
    campid: 0,
  });

  async function getcampaign() {
    const res = await axios.get("/api/campaign");
    if (res.status === 200) {
      dispatch({ type: "GET_CAMPAIGN", payload: res.data.response });
    }
    console.log("response : ", res);
  }

  async function Availability() {
    const res = await axios.put("/api/employees/available?userid=1", isonline);
  }
  useEffect(() => {
    Availability();
  }, [isonline]);
  useEffect(() => {
    getcampaign();
  }, []);
  useEffect(() => {
    setCamp(state);
  }, [state]);
  function handleSubmit(payout, id) {
    if (isonline.payout !== payout) {
      setonline({ online: true, payout: payout, campid: id });
    } else {
      setonline({ online: !isonline.online, payout: payout, campid: id });
    }
  }

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
              onClick={() => handleSubmit(c.payout, c.id)}
              className={`text-white ${
                c.payout !== isonline.payout ? "bg-slate-500" : "bg-green-500"
              } p-2`}
            >
              {c.payout == isonline.payout && isonline.online
                ? "Stop"
                : "Start"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
