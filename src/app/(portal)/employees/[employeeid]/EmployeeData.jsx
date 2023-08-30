import CalculateEarnings from "./CalculateEarnings";
const EmployeeData = ({ employee }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2">
      {/* First Section */}

      <div className="flex flex-col w-1/3 p-10">
        <h1 className="text-xl font-bold">Employee Data</h1>
        {Object.entries(employee).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-2">
            <div className="flex justify-between items-center gap-16">
              <h1 className="text-gray-800 font-bold">{key}</h1>

              <h2 className="text-gray-800">{value}</h2>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>
        ))}
      </div>
      {/* Second Section */}
      <CalculateEarnings id={employee.id} />
    </div>
  );
};

export default EmployeeData;
