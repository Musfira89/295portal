"use client";
import Invoice from "./invoice";
import Billspage from "./billspage";
import LineChart from "./linechart";
import { useEffect, useState } from "react";
import axios from "axios";

const Earnings = () => {
  const [employeeData, setEmployeeData] = useState([]);
  async function getEmployeeData(employeeid) {
    try {
      const response = await axios.get(
        `/api/employees/employeesbill?id=${employeeid}`
      );
      setEmployeeData(response.data.response[0]);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getEmployeeData(1);
  }, []);

  return (
    <div className="flex flex-col w-full p-10">
      <div className="w-full flex flex-col md:flex-row">
        {employeeData && <Billspage data={employeeData} />}
        <Invoice />
      </div>
      <div className="w-full p-10 flex flex-col justify-center">
        <h1 className="font-bold text-2xl">Daily Earning Graphs</h1>
        <div className="w-full md:w-1/2 ">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Earnings;
