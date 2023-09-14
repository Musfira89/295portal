import Invoice from "./invoice";
import Billspage from "./billspage";
import LineChart from "./linechart";

async function getEmployeeData(employeeid) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/employees/employeesbill?id=${employeeid}`
    );
    const res = await response.json();
    return res.response;
  } catch (error) {
    console.error(error);
  }
}

const Earnings = async () => {
  const employeeData = await getEmployeeData(1);
  console.log("employeeData :", employeeData);
  return (
    <div className="flex flex-col w-full p-10">
      <div className="w-full flex flex-col md:flex-row">
        {employeeData && <Billspage data={employeeData[0]} />}
        <Invoice />
      </div>
      <div className="w-full p-10 flex flex-col justify-center">
        <h1 className="font-bold text-2xl">Daily Earning Graphs</h1>
        <div className="w-full md:w-1/2 ">
          <LineChart datas={employeeData[0]} />
        </div>
      </div>
    </div>
  );
};

export default Earnings;
