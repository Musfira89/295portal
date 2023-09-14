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
          <div
            className="shadow-xl bg-gray-200 rounded-lg w-[300px] flex flex-col items-center"
            key={ind}
          >
            <div className="bg-[#ff914d] rounded-t-lg p-2 w-full flex justify-center font-semibold">
              <h1 className="font-bold text-xl text-white">{c.campaign}</h1>
            </div>
            {Object.entries(c)
              .slice(2)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center gap-16 p-4 w-full text-xs"
                >
                  <div className="text-gray-800  font-bold uppercase">
                    {key}
                  </div>
                  <div className="text-gray-800 font-bold">{value}</div>
                </div>
              ))}
            <button
              onClick={() => handleSubmit(c.payout, c.id)}
              className={` bg-[#ff914d] mb-4 rounded-full px-6 py-2 text-white text-sm font-light tracking-wider 
              hover:bg-[#f28a4a] shadow-lg transition duration-200 ease-in-out
                p-2`}
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
