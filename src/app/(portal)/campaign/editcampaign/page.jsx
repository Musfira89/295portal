"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { CampaignContext } from "../../../../components/utils/contextWrapper";

const Editcampaign = () => {
  const [camp, setCamp] = useState(null);
  const { state, dispatch } = useContext(CampaignContext);
  const searchParams = useSearchParams();
  const search = parseInt(searchParams.get("id"));
  const router = useRouter();

  useEffect(() => {
    state.map((item) => {
      if (item.id === search) {
        setCamp(item);
      }
    });
  }, [state]);

  function handleChange(key, newValue) {
    setCamp((prevCamp) => ({
      ...prevCamp,
      [key]: newValue,
    }));
  }

  async function handleSubmit() {
    console.log(camp);
    const res = await axios.put("/api/campaign", camp);
    if (res.status === 200) {
      setCamp({});
      router.push("/campaign");
    }
  }

  return (
    <div className="px-10 py-10 flex flex-col gap-4">
      {camp && (
        <div className="flex flex-col gap-4 w-[350px] ">
          {Object.entries(camp).map(([key, value]) => (
            <div className="flex justify-between w-full">
              <label className="font-semibold"> {key}</label>
              <input
                type="text"
                value={camp[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className="border-[1px] border-gray-300 rounded-md px-2 py-1"
              />
            </div>
          ))}
        </div>
      )}
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

export default Editcampaign;
