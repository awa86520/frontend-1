import React, { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../services/employeeService";

const EmployeeForm = ({ editingEmployee, setShowForm, setEditingEmployee }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setEmail(editingEmployee.email);
    }
  }, [editingEmployee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = { name, email };
    if (editingEmployee) {
      await updateEmployee(editingEmployee._id, employee);
    } else {
      await createEmployee(employee);
    }
    setShowForm(false);
    setEditingEmployee(null);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{editingEmployee ? "Edit" : "Add"} Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          {editingEmployee ? "Update" : "Add"} Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
