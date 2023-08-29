"use client";
import Displaycampaign from "../../../components/view/campaign/display";
import React, { useEffect, useState, useContext, Suspense } from "react";
import Buttons from "../../../components/view/buttons";
import { CampaignContext } from "../../../components/utils/contextWrapper";
import Link from "next/link";
import axios from "axios";

const Campaign = () => {
  const [camp, setCamp] = useState();
  const { state, dispatch } = useContext(CampaignContext);

  async function getcampaign() {
    const res = await axios.get("/api/campaign");
    if (res.status === 200) {
      dispatch({ type: "GET_CAMPAIGN", payload: res.data.response });
    }
  }
  useEffect(() => {
    getcampaign();
  }, []);
  useEffect(() => {
    setCamp(state);
  }, [state]);
  return (
    <div className=" py-10 px-10 flex gap-2 flex-wrap">
      {camp && (
        <Displaycampaign camplist={camp} getcampaign={() => getcampaign()} />
      )}

      <div>
        <Link href={"/campaign/addcampaign"}>
          <Buttons text={"+"} width={"w-10"} />
        </Link>
      </div>
    </div>
  );
};

export default Campaign;
