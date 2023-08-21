import Displaycampaign from "@/components/view/campaign/display";
import React from "react";
import Buttons from "@/components/view/buttons";
import Link from "next/link";
const camplist = [
  [
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
  ],
  [
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
  ],
];
const Campaign = () => {
  return (
    <div className=" py-10 px-10 flex gap-2 flex-wrap">
      <Displaycampaign camplist={camplist} />
      <div>
        <Link href={"/campaign/addcampaign"}>
          <Buttons text={"+"} width={"w-10"} />
        </Link>
      </div>
    </div>
  );
};

export default Campaign;
