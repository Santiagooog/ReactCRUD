import React, { useState, useEffect } from "react";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/employees")
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error("Error fetching employees:", error));
    }, []);

    return (
        <div>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.name+' '}{employee.lastName} - ${employee.position}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
