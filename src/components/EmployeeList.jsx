import React, { useState, useEffect } from "react";
import { SearchEmployee } from "./SearchEmployee";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/employees")
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error("Error fetching employees:", error));
  }, []);

  const deleteEmployee = async (id) => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este empleado?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:8080/employees/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el empleado");
      }

      setEmployees(employees.filter(emp => emp.id !== id));
    } catch (error) {
      console.error("Error eliminando empleado:", error);
    }
  };

  return (
    <div>
      <SearchEmployee />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 place-items-center">
        {employees.map((person) => (
          <div
            key={person.id}
            className="bg-gray-200 w-48 h-48 flex flex-col justify-between rounded-lg shadow-lg p-4"
          >
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                {person.name} {person.lastName}
              </p>
              <p className="text-sm text-gray-600">{person.position}</p>
              <p className="text-xs text-gray-500">{person.description}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
              onClick={() => deleteEmployee(person.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
``
