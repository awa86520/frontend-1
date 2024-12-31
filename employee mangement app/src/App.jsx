import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Employee Management</h1>
      <button
        onClick={() => setShowForm(true)}
        className="mb-6 bg-green-500 text-white px-6 py-2 rounded-md"
      >
        Add Employee
      </button>

      {showForm && (
        <EmployeeForm
          editingEmployee={editingEmployee}
          setShowForm={setShowForm}
          setEditingEmployee={setEditingEmployee}
        />
      )}

      <EmployeeList setEditingEmployee={setEditingEmployee} setShowForm={setShowForm} />
    </div>
  );
};

export default App;

