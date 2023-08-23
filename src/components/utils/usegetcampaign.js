"use client";
import React, { useEffect, useState, useContext } from "react";
import { CampaignContext } from "./contextWrapper";
import axios from "axios";

function usegetcampaign(camp, setCamp) {

  const { state, dispatch } = useContext(CampaignContext);

  async function get_campaign_db() {
    const res = await axios.get("/api/campaign");
    if (res.status === 200) {
      dispatch({ type: "GET_CAMPAIGN", payload: res.data.response });
      setCamp(state);
    }
  }
  useEffect(() => {
    get_campaign_db();
  }, []);

}
export default usegetcampaign;
