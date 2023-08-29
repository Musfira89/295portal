"use client";
import { useEffect, useContext } from "react";
import { CampaignContext } from "./contextWrapper";
import axios from "axios";

function usegetcampaign(setCamp) {

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
