"use client";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = () => {
  const [empdata, setempData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [earnings, setEarnings] = useState([]);
  async function getData() {
    try {
      const res = await axios.get("/api/employees/employeechart?id=1");
      setempData(res.data.response);
      console.log(res.data.response);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const datesArray = empdata.map((item) => item.date);
    setLabels(datesArray);
    const earningsArray = empdata.map((item) => item.earnings);
    setEarnings(earningsArray);
  }, [empdata]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My Earnings",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: earnings,
      },
    ],
  };

  return <>{earnings && <Line data={data} />}</>;
};

export default LineChart;
