// import EmployeeData from "./EmployeeData";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const EmployeeData = dynamic(() => import("./EmployeeData"), {
  suspense: true,
});
import Loading from "../loading";

async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/employees");
  const res = response.json();
  return res.map((slug) => ({
    employeeid: slug.id,
  }));
}
async function getEmployeeData(employeeid) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/employees/employeeid?id=${employeeid}`
    );
    const res = await response.json();
    return res.response;
  } catch (error) {
    console.error(error);
  }
}
const EmployeePage = async ({ params }) => {
  const employeeData = await getEmployeeData(params.employeeid);
  console.log(employeeData);

  return (
    // <div>hello {params.employeeid}</div>
    <Suspense fallback={<Loading />}>
      {employeeData && <EmployeeData employee={employeeData[0]} />}
    </Suspense>
  );
};

export default EmployeePage;
