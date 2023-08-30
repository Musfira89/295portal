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
    <div>
      <h1>Employees</h1>
      <ul>
        {employees &&
          employees.map((employee) => (
            <li key={employee.id}>
              <Link href={`/employees/${employee.id}`}>
                {employee.firstName} {employee.lastName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Employees;
