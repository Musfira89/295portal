"use client";
import React, { useState } from "react";
import axios from "axios";

const CalculateEarnings = ({ id }) => {
  const [callsToday, setCallsToday] = useState(0);
  const [billablesToday, setBillablesToday] = useState(0);

  const handleCallsChange = (event) => {
    setCallsToday(event.target.value);
  };

  const handleBillablesChange = (event) => {
    setBillablesToday(event.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      callstoday: parseInt(callsToday),
      billablestoday: parseInt(billablesToday),
    };

    try {
      console.log("Data sent:", data);
      const response = await axios.post(
        `/api/employees/employeeid?id=${id}`,
        data
      );
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="w-2/3 p-10">
      <h1 className="text-xl font-bold">Calculate Earnings</h1>
      <div className="flex flex-col gap-2 mt-4">
        {/* Call Sent Today */}
        <div>
          <h1 className="font-bold text-gray-600">Calls Today</h1>
          <input
            type="text"
            placeholder="Calls Today"
            value={callsToday}
            onChange={handleCallsChange}
            className="border-[1px] border-gray-400 rounded-lg p-2"
          />
        </div>
        {/* Billables Today */}
        <div>
          <h1 className="font-bold text-gray-600">Billables Today</h1>
          <input
            type="text"
            placeholder="Today's Billables"
            value={billablesToday}
            onChange={handleBillablesChange}
            className="border-[1px] border-gray-400 rounded-lg p-2"
          />
        </div>
        <button
          className="bg-[#ff914d] rounded-md px-4 py-2 text-white text-sm font-light tracking-wider 
        hover:bg-[#f28a4a] shadow-lg transition duration-200 ease-in-out w-36"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CalculateEarnings;
