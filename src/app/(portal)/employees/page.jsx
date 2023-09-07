"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  async function getEmployees() {
    try {
      const response = await axios.get("/api/employees");
      setEmployees(response.data.response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="p-10">
      <h1>Employees</h1>
      <ul>
        {employees &&
          employees.map((employee) => (
            <div
              key={employee.id}
              className="shadow-lg shadow-orange-100/20 px-8 py-4"
            >
              <Link
                href={`/employees/${employee.id}`}
                className="flex items-center gap-4"
              >
                <h1 className="font-bold">
                  {employee.firstName} {employee.lastName}
                </h1>
                <h1>{employee.email}</h1>
                <div
                  className={`${
                    employee.availability?.online
                      ? "bg-green-500"
                      : "bg-red-500"
                  }  w-4 h-4 rounded-full text-white text-sm tracking-wider`}
                ></div>
              </Link>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Employees;
