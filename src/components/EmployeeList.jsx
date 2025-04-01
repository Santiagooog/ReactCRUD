import React, { useState, useEffect } from "react";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/employees")
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error("Error fetching employees:", error));
    }, []);

    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7  place-items-center">
    {employees.map((person) => (
      <div
        key={person.id}
        className="bg-gray-200 w-48 h-48 flex flex-col justify-between rounded-lg shadow-lg p-4"
      >
        
        <div className="flex-1"></div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-900">
            {person.name} {person.lastName}
          </p>
          <p className="text-sm text-gray-600">{person.position}</p>
        </div>
      </div>
    ))}
  </div>
};

export default EmployeeList;
