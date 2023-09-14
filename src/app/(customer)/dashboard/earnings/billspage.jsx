import React from "react";

const Billspage = ({ data }) => {
  console.log("data :", data);
  return (
    <div className="flex flex-col md:flex-row p-10 gap-4 w-full md:w-1/2">
      <div className="flex flex-col gap-4">
        <div className="rounded-lg bg-purple-700 text-white text-2xl p-4 flex flex-col shadow-md">
          <h1>Total Earnings</h1>
          <h2>$ {data.totalearning}</h2>
        </div>
        <div className="rounded-lg bg-purple-700 text-white p-4 text-xl flex flex-col shadow-md">
          <h1>Earnings Today</h1>
          <h2>$ {data.earningtoday}</h2>
        </div>
        <div className="rounded-lg bg-purple-700 text-white p-4 text-xl flex flex-col shadow-md">
          <h1>Total Call Sent</h1>
          <h2> {data.totalcalls}</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="rounded-lg bg-white text-black text-2xl p-4 flex flex-col shadow-md">
          <h1>Total Billables</h1>
          <h2> {data.totalbillables}</h2>
        </div>
        <div className="rounded-lg bg-white text-black p-4 text-xl flex flex-col shadow-md">
          <h1>Billables Today</h1>
          <h2> {data.billablestoday}</h2>
        </div>
        <div className="rounded-lg bg-white text-black p-4 text-xl flex flex-col shadow-md">
          <h1>Call Sent Today</h1>
          <h2> {data.calltoday}</h2>
        </div>
      </div>
    </div>
  );
};

export default Billspage;
